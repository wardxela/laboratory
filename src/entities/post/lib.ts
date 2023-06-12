export const POSTS_DIR = 'src/posts/';
export const onlyMDX = (filename: string) => /.mdx$/.test(filename);

export const toMdxFilename = (slug: string) => `${slug}.mdx`;
