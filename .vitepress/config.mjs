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
    // siteTitle: 'xxxx',
    logo: `/logo.png`,
    outline: 'deep', //'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
    outlineTitle: '导航',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'API', link: '/api' },
      { text: '问答', link: '/qa' },
      {
        text: '更多', items: [
          { text: 'Item A', link: '/item-1' }
        ]
      },
    ],
    footer: {
      message: '支点软件',
      copyright: 'Zhang copyright@ 2023 Albert '
    },
    sidebar: {
      "/api": set_sidebar(`api`),
      "/qa": set_sidebar(`qa`),
      // "qa": [{
      //   text: 'Guide',
      //   items: [
      //     { text: 'Introduction', link: '/qa/index' },
      //     { text: '首页', link: '/qa/首页' },
      //     { text: '公司', link: '/qa/公司' },
      //     { text: '测试', link: '/qa/试试' },
      //   ]
      // }]
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
