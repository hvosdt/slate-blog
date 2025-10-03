/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://slate-blog-demo.vercel.app',
  avatar: '/avatar.png',
  title: 'Давид Шуле',
  description: 'Читай, замышляй!',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Давид Шуле',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/SlateDesign/slate-blog'
    },
]
});