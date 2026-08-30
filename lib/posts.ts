import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  tags?: string[];
  author?: string;
  excerpt?: string;
  readingTime?: string;
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

export function getAllPosts(): Post[] {
  ensurePostsDir();

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((file) => {
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const html = marked.parse(content) as string;

    // Create excerpt from first paragraph if not provided in frontmatter
    const plainText = content.replace(/^#.*$/gm, '').trim();
    const excerpt = data.excerpt || plainText.split('\n\n')[0]?.replace(/\n/g, ' ').substring(0, 240) || '';

    return {
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString().split('T')[0],
      slug: data.slug || slugify(data.title || 'untitled'),
      tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : ['Engineering'],
      author: data.author || 'Kiran Machha',
      readingTime: calculateReadingTime(content),
      content,
      html,
      excerpt,
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function getAdjacentPosts(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) return { prev: null, next: null };

  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const next = index > 0 ? posts[index - 1] : null;

  return {
    prev: prev ? { title: prev.title, date: prev.date, slug: prev.slug, excerpt: prev.excerpt, tags: prev.tags } : null,
    next: next ? { title: next.title, date: next.date, slug: next.slug, excerpt: next.excerpt, tags: next.tags } : null,
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

  return { title, date, slug, tags: postTags, author: 'Kiran Machha' };
}
