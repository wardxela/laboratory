import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostsNames, getPost } from '@/entities/post';
import { Container } from '@/shared/ui';

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(`${params.slug}.mdx`);

  return (
    <Container>
      <MDXRemote source={post} options={{ parseFrontmatter: true }} />
    </Container>
  );
}

export async function generateStaticParams() {
  return getAllPostsNames().then(names => names.map(name => ({ slug: name })));
}
