import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { revalidateToken } from '@/constants';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const passwordInHeader = (await headers()).get('revalidate-password') ?? '';

  if (passwordInHeader === revalidateToken) {
    const revalidateTags = ((await request.json())['tags'] as string[]) ?? [];

    revalidateTags.map((tag) => revalidateTag(tag));
  }

  return NextResponse.json({ message: 'ok' });
}
