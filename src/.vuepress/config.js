module.exports = {
    title: 'news.mcenahle.org.cn',
    description: '网站建设新闻网站',
    lang: 'zh-CN',

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'news.mcenahle.org.cn',
            description: '网站建设新闻网站'
        },
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }]
    ],

    themeConfig: {
        repo: 'mcenahle/vuepress-site-news',
        docsDir: 'src',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        logo: '/favicon.svg',

        smoothScroll: true,

        nav: [
            { text: '首页', link: '/' },
            { text: '站点动态', link: '/website/2026-1.html' },
            { text: '主页网站', link: 'https://www.mcenahle.org.cn/' },
        ],

        sidebar: [
            {
                title: '站点动态',
                collapsable: false,
                children: [
                    '/website/2026-1.html',
                ]
            }
        ]
    }
}
