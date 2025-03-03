import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/my-note/",
  outDir: "docs",
  title: "学习笔记", //站点标题
  description: "学习笔记", //站点描述
  themeConfig: {
    //站点主体
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "首页",
        link: "/",
      },
      { text: "内容", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "项目地址",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/examples/examples1" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  rewrites: {},
});
