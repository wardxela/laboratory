import { Metadata } from 'next';
import { Container } from '@/shared/ui';
import { MDXrsc } from '@/entities/mdx';
import {
  getAllPostsSlugs,
  getPostContent,
  getPostMetadata,
  toMdxFilename,
} from '@/entities/post';

type PostProps = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: PostProps) {
  const post = await getPostContent(toMdxFilename(slug));

  return (
    <Container>
      <MDXrsc source={post} />
    </Container>
  );
}

export async function generateMetadata({
  params: { slug },
}: PostProps): Promise<Metadata> {
  const meta = await getPostContent(toMdxFilename(slug)).then(getPostMetadata);

  return {
    title: meta.title,
    description: meta.description,
    authors: [
      {
        name: 'Alexander Tyurinov',
        url: 'https://vk.com/wardxela/',
      },
    ],
  };
}

export async function generateStaticParams() {
  return getAllPostsSlugs().then(slugs => slugs.map(slug => ({ slug })));
}
