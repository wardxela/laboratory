import Link from 'next/link';
import type { PostFrontmatter } from '../types';

export function PostPreview(props: PostFrontmatter & { id: string }) {
  return (
    <article>
      <h2 className="mb-4 mt-2 text-3xl font-bold dark:text-slate-200">
        {props.title}
      </h2>
      <time className="mb-2 block text-sm text-slate-500">
        {props.date.toLocaleDateString()}
      </time>
      <p className="mb-4 text-lg last:mb-0 dark:text-slate-400">
        {props.description}
      </p>
      <Link
        className="text-slate-700 underline hover:text-blue-400 dark:text-slate-500 dark:hover:text-blue-400"
        href={`/blog/${props.id}`}
      >
        Читать
      </Link>
    </article>
  );
}
