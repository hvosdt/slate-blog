/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://shule.prvms.ru',
  avatar: '/logo-dark.png',
  title: 'Читай, замышляй!',
  description: 'Давид Шуле - стихи, сатира и лирика на острые темы современности.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Давид Шуле',
  },
  socialLinks: [
    {
      icon: 'telegram',
      link: 'https://github.com/SlateDesign/slate-blog'
    },
]
});