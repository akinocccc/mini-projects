import { hopeTheme } from 'vuepress-theme-hope';
import * as navbar from './navbar';

export default hopeTheme({
  author: {
    name: 'Mini',
    url: '/'
  },
  themeColor: {
    blue: '#2196f3'
  },

  iconPrefix: 'iconfont icon-',

  logo: '/logo.svg',

  repo: 'https://github.com/vkm0303/mini-projects',

  docsDir: 'docs',

  docsBranch: 'mini-page',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    medias: {}
  },

  locales: {
    '/': {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: false,

      footer: 'Mini Projects',

      displayFooter: true
    },

    /**
     * Chinese locale config
     */
    '/en/': {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: false,

      footer: 'Mini Projects',

      displayFooter: true
    }
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
      '/zh/guide/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: false
    },

    copyright: true,

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: 'giscus',
      repo: 'vkm0303/mini-projects',
      repoId: 'R_kgDOHWEnZw',
      category: 'Show and tell',
      categoryId: 'DIC_kwDOHWEnZ84CPLhG'
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
});
