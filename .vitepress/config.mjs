import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// const base = '/doc/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base,
  srcDir: 'doc',
  title: "支点软件",
  // titleTemplate: ':title - 支点软件',
  description: "描述",
  assetsDir: 'public',
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  themeConfig: {
    logo: `logo.png`,
    outline: 'deep',
    outlineTitle: '目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'API', link: '/api' },
      {
        text: '问答', link: '/qa'
      }
    ],
    footer: {
      copyright: 'Zhang copyright@ 2023 Albert '
    },
    sidebar: {
      "/api": set_sidebar(`api`),
      "/qa": set_sidebar(`qa`),
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})
