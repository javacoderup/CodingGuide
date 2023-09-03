import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/CodingGuide/",

  lang: "zh-CN",
  title: "CodingGuide",
  description: "编程思想知识沉淀、分享、成长、让他人和自己都能获得收获和成长！",
  theme,
});
