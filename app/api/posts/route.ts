import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';
import { savePost } from '@/lib/posts';

export async function POST(request: Request) {
  try {
    const isAuth = await verifyAuth();
    if (!isAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const post = savePost(title, content);
    return NextResponse.json({ success: true, slug: post.slug });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
