module.exports = {
    title: '网站建设新闻网站',
    description: '网站建设新闻网站',
    lang: 'zh-CN',

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: '网站建设新闻网站',
            description: '网站建设新闻网站'
        },
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }]
    ],

    markdown: {
        lineNumbers: true,
    },

    themeConfig: {
        search: false,

        repo: 'mcenahle/vuepress-site-news',
        docsDir: 'src',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '✏️ 在 GitHub 编辑此页',

        logo: '/favicon.svg',

        smoothScroll: true,

        nav: [
            { text: '首页', link: '/' },
            { text: '站点动态', link: '/website/2026-1.html' },
            { text: '站点通知', link: '/tongzhi/old-blog-site-archived.html' },
            { text: '主页网站', link: 'https://www.mcenahle.org.cn/' },
            { text: '博客网站', link: 'https://blog.mcenahle.org.cn/' },
        ],

        sidebar: [
            {
                title: '站点动态',
                collapsable: false,
                children: [
                    '/website/2026-1.html',
                ]
            },
            {
                title: '站点通知',
                collapsable: false,
                children: [
                    '/tongzhi/old-blog-site-archived.html',
                    '/tongzhi/revoke-policy-1-15.html'
                ]
            }
        ]
    }
}
