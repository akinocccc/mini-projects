import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
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
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/mini-projects/logo.svg'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Mini Projects',
      description: 'SZTU × Tencent'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mini Projects',
      description: 'SZTU × Tencent'
    }
  },

  plugins: [
    // searchPlugin({
    //   isSearchable: page => page.path !== '/',
    //   // getExtraFields: page => page.frontmatter.tags ?? [],
    //   locales: {
    //     '/': {
    //       placeholder: '搜索'
    //     },
    //     '/en': {
    //       placeholder: 'Search'
    //     }
    //   }
    // })
  ],

  theme
});
