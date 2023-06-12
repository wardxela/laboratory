import { Container } from '@/shared/ui';
import { PostPreview, getPosts } from '@/entities/post';

export default async function Home() {
  const posts = await getPosts();

  return (
    <Container>
      {posts.map(post => (
        <PostPreview key={post.id} id={post.id} {...post.data.frontmatter} />
      ))}
    </Container>
  );
}
