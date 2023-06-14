import { PostPreview, getPostsMetadata } from '@/entities/post';

export const revalidate = 3600;

export default async function Home() {
  const posts = await getPostsMetadata();

  return (
    <div className="grid gap-8">
      {posts
        .sort((a, b) => (b.date > a.date ? 1 : -1))
        .map(post => (
          <PostPreview key={post.id} {...post} />
        ))}
    </div>
  );
}

export const metadata = {
  title: 'Блог',
  description:
    'Блог про Frontend, Backend, программирование и все, что с этим связано',
};
