/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  avatar: '/logo.png',
  title: 'Читай, замышляй',
  description: 'Стихи, сатира Давида Шуле.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Давид Шуле',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://t.me/davidshule',
    },
]
});