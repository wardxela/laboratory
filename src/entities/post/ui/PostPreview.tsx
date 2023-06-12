import Link from 'next/link';
import type { PostFrontmatter } from '../types';

export function PostPreview(props: PostFrontmatter & { id: string }) {
  return (
    <article>
      <h2 className="mb-1 text-2xl font-bold">{props.title}</h2>
      <time className="mb-2 block text-sm text-gray-500">
        {props.date.toLocaleDateString()}
      </time>
      <p className="mb-2 text-lg">{props.description}</p>
      <Link
        className="underline hover:text-orange-500"
        href={`/blog/${props.id}`}
      >
        Читать
      </Link>
    </article>
  );
}
