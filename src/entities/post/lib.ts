'use server';

import { readFile, readdir } from 'fs/promises';
import { parse, resolve } from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { PostFrontmatter } from './types';

const POSTS_DIR = 'src/posts/';

const onlyMDX = (filename: string) => /.mdx$/.test(filename);

async function getFilenames() {
  return readdir(POSTS_DIR).then(filenames => filenames.filter(onlyMDX));
}

export async function getPosts() {
  return getFilenames().then(filenames =>
    Promise.all(
      filenames.map(filename =>
        getPost(filename)
          .then(content =>
            compileMDX<PostFrontmatter>({
              source: content,
              options: { parseFrontmatter: true },
            })
          )
          .then(data => ({
            id: parse(filename).name,
            data,
          }))
      )
    )
  );
}

export async function getPost(filename: string) {
  return readFile(resolve(POSTS_DIR, filename));
}

export async function getAllPostsNames() {
  return getFilenames().then(filenames =>
    filenames.map(filename => parse(filename).name)
  );
}
