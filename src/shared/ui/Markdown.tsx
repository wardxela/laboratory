import { PropsWithChildren } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight/lib';

function CodeSample({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

CodeSample.Code = function Code({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <h5>Код</h5>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

CodeSample.Result = function Result({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <h5>Результат</h5>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

const components: MDXRemoteProps['components'] = {
  CodeSample: CodeSample,
};

export function Markdown(
  props: Omit<MDXRemoteProps, 'options' | 'components'>
) {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <MDXRemote
        {...props}
        components={components}
        options={{
          parseFrontmatter: true,
          mdxOptions: { rehypePlugins: [rehypeHighlight] },
        }}
      />
    </div>
  );
}
