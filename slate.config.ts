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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>',
      link: 'https://t.me/davidshule',
    },
]
});