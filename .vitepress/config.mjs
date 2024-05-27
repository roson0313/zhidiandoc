import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

const base = '/doc/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  srcDir: 'doc',
  title: "支点软件",
  description: "描述",
  assetsDir: 'public',
  head: [["link", { rel: "icon", href: `logo.png` }]],
  themeConfig: {
    logo: `logo.png`,
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '案列', link: `markdown-examples`
      }
    ],
    footer: {
      copyright: 'Zhang copyright@ 2023 Albert '
    },
    sidebar: {
      [`${base}api`]: set_sidebar(`${base}api`),
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
