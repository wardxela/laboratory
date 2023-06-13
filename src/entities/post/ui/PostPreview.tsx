import Link from 'next/link';
import { Tag } from '@/shared/ui';
import type { PostFrontmatter } from '../types';

export function PostPreview(props: PostFrontmatter & { id: string }) {
  return (
    <article>
      <Tag.H2>{props.title}</Tag.H2>
      <time className="mb-2 block text-sm text-slate-500">
        {props.date.toLocaleDateString()}
      </time>
      <Tag.P>{props.description}</Tag.P>
      <Link
        className="text-slate-700 underline hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-400"
        href={`/blog/${props.id}`}
      >
        Читать
      </Link>
    </article>
  );
}
