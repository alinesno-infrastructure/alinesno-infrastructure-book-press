module.exports = {
    lang: 'zh-CN',
    title: '中小微团队从0到1落地中台架构建设实践过程',
    description: '针对中小微团队在技术和数字转型过程中的一些参考设计参考，也是为了更好的对外输出经验',
    base: '/',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['link', { rel: 'icon', href: '/favicon.png' }],
        // ['link', { rel: 'stylesheet', href: '/font-awesome-5.11.2/css/all.min.css' }]
    ],
    plugins: [
        ['@vuepress/active-header-links'],
        [
            '@vuepress/google-analytics', {
                'ga': 'G-V0D6KNXG35' 
            }
        ],
        ['vuepress-plugin-code-copy', true] ,
        ['@vuepress/nprogress'] ,
        ['@vuepress/back-to-top'] , 
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }] ,
        ['@vuepress/medium-zoom']
    ],
    themeConfig: {
        logo: '/logo.png', // 注意图片放在 public 文件夹下
        lastUpdated: 'Last Updated',
        sidebarDepth: 2,
        repo: 'https://github.com/alinesno-cloud/alinesno-cloud-book-press',
        docsDir: 'docs',
        repoLabel: 'Github',
        docsBranch: '1.0.0-SNAHSPOT',
        editLinks: true,
        editLinkText: '帮助我们改善此页面',
        smoothScroll: true ,
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '书籍目录',
                link: '/platform/'
            } 
        ],
        sidebar: {
        }
    },
}