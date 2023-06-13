'use server';

import { readFile, readdir } from 'fs/promises';
import { parse, resolve } from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { PostFrontmatter } from './types';
import { POSTS_DIR, onlyMDX } from './lib';

export async function getPostsMetadata() {
  return getFilenames().then(filenames =>
    Promise.all(
      filenames.map(filename =>
        getPostContent(filename)
          .then(getPostMetadata)
          .then(data => ({
            id: parse(filename).name,
            ...data,
          }))
      )
    )
  );
}

export async function getPostMetadata(content: Buffer) {
  return compileMDX<PostFrontmatter>({
    source: content,
    options: { parseFrontmatter: true },
  }).then(result => result.frontmatter);
}

export async function getAllPostsSlugs() {
  return getFilenames().then(filenames =>
    filenames.map(filename => parse(filename).name)
  );
}

/**
 * @param filename path to MDX file
 * @returns Buffer containing MDX data
 */
export async function getPostContent(filename: string) {
  return readFile(resolve(process.cwd(), POSTS_DIR, filename));
}

/**
 * @returns array of MDX file names
 */
async function getFilenames() {
  return readdir(resolve(process.cwd(), POSTS_DIR)).then(filenames =>
    filenames.filter(onlyMDX)
  );
}
