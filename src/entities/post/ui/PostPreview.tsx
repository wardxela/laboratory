import Link from 'next/link';
import { Tag } from '@/shared/ui';
import type { PostFrontmatter } from '../types';

export function PostPreview(props: PostFrontmatter & { id: string }) {
  return (
    <article>
      <Tag.H2>{props.title}</Tag.H2>
      <time className="mb-2 block text-sm text-gray-500">
        {props.date.toLocaleDateString()}
      </time>
      <Tag.P>{props.description}</Tag.P>
      <Link
        className="underline hover:text-orange-500"
        href={`/blog/${props.id}`}
      >
        Читать
      </Link>
    </article>
  );
}
