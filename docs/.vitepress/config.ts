import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hebai utils",
  description: "日常使用工具类封装",
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        titleFromFile: true,
      })
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'docs', link: '/doc/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hebaq/utils' }
    ]
  }
})
