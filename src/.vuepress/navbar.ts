import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/interview/",
    "/fullstack/java/",
    "/fullstack/database/",
    "/fullstack/framework/",
    "/fullstack/middleware/",
    "/fullstack/architecture/",
    "/fullstack/devops/",
    {
        text: "常用工具",
        icon: "tool",
        link: "/fullstack/utils/常用工具",
    },
    {
        text: "关于作者",
        icon: "about",
        prefix: "/fullstack/about/",
        children: [
            {text: "关于作者", icon: "zuozhe", link: "关于作者"},
            {text: "更新历史", icon: "history", link: "更新历史"},
        ],
    }
]);
