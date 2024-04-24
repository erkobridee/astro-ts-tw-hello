import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import packageJSON from './package.json' assert { type: 'json' };

const { name, github_pages } = packageJSON;
const isGitHubPagesBuild = !!process.env.GITHUB_PAGES;
const isGitHubPagesPreview = !!process.env.GITHUB_PAGES_PREVIEW;

const baseConfig = {
  integrations: [
    mdx(),
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true
    })
  ]
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
