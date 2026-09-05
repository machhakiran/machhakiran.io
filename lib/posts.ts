import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { parsePostStageInfo, PostStageInfo, STAGES } from './roadmap';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  tags?: string[];
  author?: string;
  excerpt?: string;
  readingTime?: string;
  stageInfo: PostStageInfo;
}

export interface Post extends PostMeta {
  content: string;
  html: string;
  excerpt: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 80);
}

function ensurePostsDir() {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Returns all posts sorted canonically by Roadmap order:
 * Stage 00 (Project 01..04) -> Stage 01 (Project 01..04) -> ... -> Stage 14 (Project 01..04)
 * Followed by standalone architectural whitepapers.
 */
export function getAllPosts(): Post[] {
  ensurePostsDir();

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts: Post[] = files.map((file) => {
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const html = marked.parse(content) as string;

    const tags = Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : ['Engineering'];
    const slug = data.slug || slugify(data.title || 'untitled');
    const stageInfo = parsePostStageInfo(slug, tags);

    const plainText = content.replace(/^#.*$/gm, '').trim();
    const excerpt = data.excerpt || plainText.split('\n\n')[0]?.replace(/\n/g, ' ').substring(0, 240) || '';

    return {
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString().split('T')[0],
      slug,
      tags,
      author: data.author || 'Kiran Machha',
      readingTime: calculateReadingTime(content),
      stageInfo,
      content,
      html,
      excerpt,
    };
  });

  // Roadmap Canonical Sort:
  // Roadmap items first (ordered by stage ID 00-14, then project number 01-04)
  // Non-roadmap items second (by date descending)
  posts.sort((a, b) => {
    if (a.stageInfo.isRoadmap && b.stageInfo.isRoadmap) {
      const stageDiff = parseInt(a.stageInfo.stageId || '0', 10) - parseInt(b.stageInfo.stageId || '0', 10);
      if (stageDiff !== 0) return stageDiff;
      return (a.stageInfo.projectIndex || 0) - (b.stageInfo.projectIndex || 0);
    }
    if (a.stageInfo.isRoadmap && !b.stageInfo.isRoadmap) return -1;
    if (!a.stageInfo.isRoadmap && b.stageInfo.isRoadmap) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Returns the exact adjacent post in the canonical roadmap sequence:
 * e.g. Stage 00 Project 02 -> prev is Stage 00 Project 01, next is Stage 00 Project 03.
 * Stage 00 Project 04 -> next is Stage 01 Project 01.
 */
export function getAdjacentPosts(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) return { prev: null, next: null };

  // Since posts are sorted canonically 00.01 -> 14.04:
  // prev is index - 1
  // next is index + 1
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return {
    prev: prev
      ? {
          title: prev.title,
          date: prev.date,
          slug: prev.slug,
          excerpt: prev.excerpt,
          tags: prev.tags,
          readingTime: prev.readingTime,
          stageInfo: prev.stageInfo,
        }
      : null,
    next: next
      ? {
          title: next.title,
          date: next.date,
          slug: next.slug,
          excerpt: next.excerpt,
          tags: next.tags,
          readingTime: next.readingTime,
          stageInfo: next.stageInfo,
        }
      : null,
  };
}

export function savePost(title: string, content: string, tags?: string[], customSlug?: string, excerpt?: string): PostMeta {
  ensurePostsDir();

  const slug = customSlug || slugify(title);
  const date = new Date().toISOString().split('T')[0];
  const postTags = tags && tags.length > 0 ? tags : ['AI', 'Engineering'];

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
slug: "${slug}"
tags: ${JSON.stringify(postTags)}
author: "Kiran Machha"
excerpt: "${(excerpt || '').replace(/"/g, '\\"')}"
---

`;

  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter + content, 'utf-8');

  return {
    title,
    date,
    slug,
    tags: postTags,
    author: 'Kiran Machha',
    stageInfo: parsePostStageInfo(slug, postTags),
  };
}
