import { hopeTheme } from 'vuepress-theme-hope';
import * as navbar from './navbar';
import * as sidebar from './sidebar';

export default hopeTheme({
  // author: {},

  iconPrefix: 'iconfont icon-',

  logo: '/logo.png',

  repo: 'https://github.com/vkm0303/mini-page.git',

  docsDir: 'docs',

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

      footer: '默认页脚',

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

      footer: 'Default footer',

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

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: 'giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69'

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
});
