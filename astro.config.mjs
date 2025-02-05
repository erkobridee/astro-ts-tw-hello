// https://docs.astro.build/en/reference/configuration-reference/

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://tailwindcss.com/docs/installation/framework-guides/astro
import tailwindcss from '@tailwindcss/vite';

import packageJSON from './package.json' assert { type: 'json' };

const { name, github_pages } = packageJSON;
const isGitHubPagesBuild = !!process.env.GITHUB_PAGES;
const isGitHubPagesPreview = !!process.env.GITHUB_PAGES_PREVIEW;

/** @type {import('astro/config').config} */
const baseConfig = {
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
};

// https://docs.astro.build/en/guides/deploy/github/#configure-astro-for-github-pages
const config = isGitHubPagesBuild
  ? {
      ...baseConfig,
      site: isGitHubPagesPreview ? undefined : github_pages,
      base: `/${name}`
    }
  : baseConfig;

// https://astro.build/config
export default defineConfig(config);
