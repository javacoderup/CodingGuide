import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/guide/",
    "/interview/",
    {
        text: "Java",
        icon: "book",
        prefix: "/fullstack/java/",
        children: [
            {
                text: "OOP编程和基础知识",
                icon: "book",
                prefix: "base/",
                children: [
                    {text: "OOP编程", icon: "book", link: "OOP编程"},
                    {text: "Java基础知识", icon: "book", link: "Java基础知识"}
                ],
            },
            {
                text: "Java集合框架知识",
                icon: "book",
                prefix: "collection/",
                children: [
                    {text: "Collection集合知识总结", icon: "book", link: "Collection集合知识总结"},
                    {text: "Map集合知识总结", icon: "book", link: "Map集合知识总结"}
                ],
            },
            {
                text: "Java并发框架知识",
                icon: "book",
                prefix: "concurrency/",
                children: [
                    {text: "Java并发理论总结", icon: "book", link: "Java并发理论总结"},
                    {text: "Java并发线程总结", icon: "book", link: "Java并发线程总结"},
                    {text: "JUC并发编程总结", icon: "book", link: "JUC并发编程总结"},
                ],
            },
            {
                text: "JavaIO框架知识",
                icon: "book",
                prefix: "io/",
                children: [
                    {text: "IO体系知识总结", icon: "book", link: "IO体系知识总结"},
                ],
            },
            {
                text: "Java虚拟机知识",
                icon: "book",
                prefix: "java/jvm/",
                children: [
                    {text: "Java类加载机知识制总结", icon: "book", link: "Java类加载机知识制总结"},
                    {text: "JVM内存结构知识总结", icon: "book", link: "JVM内存结构知识总结"},
                    {text: "JVM垃圾回收基础知识总结", icon: "book", link: "JVM垃圾回收基础知识总结"},
                ],
            }
        ],
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
