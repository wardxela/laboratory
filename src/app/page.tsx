import { Container } from '@/shared/ui';
import { PostPreview, getPostsMetadata } from '@/entities/post';

export default async function Home() {
  const posts = await getPostsMetadata();

  return (
    <Container>
      <div className="grid gap-8">
        {posts.map(post => (
          <PostPreview key={post.id} {...post} />
        ))}
      </div>
    </Container>
  );
}
