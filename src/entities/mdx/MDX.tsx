import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight/lib';
import { Tag } from '@/shared/ui';

const components: MDXRemoteProps['components'] = {
  // Overrides
  h1: Tag.H1,
  h2: Tag.H2,
  h3: Tag.H3,
  h4: Tag.H4,
  h5: Tag.H5,
  h6: Tag.H6,
  p: Tag.P,
  hr: Tag.HR,

  // Custom
  CodeSample: Tag.CodeSample,
};

export function MDXrsc(props: Omit<MDXRemoteProps, 'options' | 'components'>) {
  return (
    <MDXRemote
      {...props}
      options={{
        parseFrontmatter: true,
        mdxOptions: { rehypePlugins: [rehypeHighlight] },
      }}
      components={components}
    />
  );
}
