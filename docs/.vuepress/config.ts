import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  base: '/mini-projects/',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Mini Project',
      description: 'SZTU × Tencent'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mini Project',
      description: 'SZTU × Tencent'
    }
  },
  theme
});
