module.exports = {
  lang: 'zh-CN',
  title: '中小微团队0到1数字中台产品建设实战',
  description: '能够灵活满足企业数字化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，进而形成企业的业务和数据中台。通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业数字化转型的成功。',
  base: '/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'stylesheet', href: '/font-awesome-5.11.2/css/all.min.css' }]
  ],
  plugins: [
    ['@vuepress/active-header-links'],
    // [
    //     '@vuepress/google-analytics', {
    //         'ga': 'G-V0D6KNXG35' // UA-00000000-0
    //     }
    // ],
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    // ['@vssue/vuepress-plugin-vssue', {
    //     // set `platform` rather than `api`
    //     platform: 'github',
    //     // all other options of Vssue are allowed
    //     owner: 'alinesno-cloud',
    //     admins:['switchII'],
    //     repo: 'alinesno-cloud-platform-press',
    //     clientId: '27af56cba1b05d7313eb',
    //     clientSecret: 'ecb6b64de79461454b8033b6c5790e6f8e8a1c87',
    // }],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/medium-zoom']
  ],
  themeConfig: {
    logo: '/logo.png', // 注意图片放在 public 文件夹下
    lastUpdated: 'Last Updated',
    sidebarDepth: 2,
    repo: 'https://github.com/alinesno-cloud/alinesno-cloud-book-press',
    docsDir: 'docs',
    repoLabel: 'Github',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面',
    smoothScroll: true,
    nav: [
      {
        text: '封面',
        link: '/'
      },
      {
        text: '书籍目录',
        link: '/book/'
      },
      {
        text: '建设文档',
        link: 'http://alinesno-platform.linesno.com'
      },
    ],
    sidebar: {
      '/book/': [
        {
          title: '行业发展与规划',
          collapsible: true,
          children: genFirestLearnSidebar(1)
        },
        {
          title: '产品思考与规划',
          collapsible: true,
          children: genFirestLearnSidebar(2)
        },
        {
          title: '团队建设与管理',
          collapsible: true,
          children: genFirestLearnSidebar(3)
        },
        {
          title: '产品架构与研发',
          collapsible: true,
          children: genFirestLearnSidebar(4)
        },
        {
          title: '项目实战与落地',
          collapsible: true,
          children: genFirestLearnSidebar(5)
        },
        {
          title: '产品优化和输出',
          collapsible: true,
          children: genFirestLearnSidebar(6)
        },
        {
          title: '中台产品化心得',
          collapsible: true,
          children: genFirestLearnSidebar(7)
        },
        {
          title: '致谢',
          collapsible: true,
          children: genFirestLearnSidebar(8)
        }
      ],
    }
  },
}


/**
*
* @param {概述} type
* @returns
*/
function genFirestLearnSidebar(type) {
  var mapArr = []

  if (type == 0) {
  } else if (type == 1) {
    mapArr = [
      '/book/',
      '/book/00_写在前面的话.md',
      '/book/01_国内行业软件发展的一些心得和规划.md',
      '/book/02_在新基建数字化的时代_寻找自我的突破和价值创造',
    ]
  } else if (type == 2) {
    mapArr = [
      '/book/03_为什么觉得数字中台是团队的新型基础设施.md',
      '/book/04_为什么要搭建的数字中台而不仅是单一中台架构.md',
      '/book/05_对中台的理解和企业数字中台建设的思考.md',
      '/book/06_对新中台模型的一些经验思考总结.md',
    ]
  } else if (type == 3) {
    mapArr = [
      '/book/07_为什么要从零开始搭建属于自己的研发平台和中台架构.md',
      '/book/08_从开源到组建起一个中台部门技术团队心得.md',
      '/book/09_过程是怎么带几个学生从零开始做一个研发平台的.md',
      '/book/10_过程对管理角色带团队的一些经验分享.md' ,
      '/book/11_从开发工程师岗到技术管理岗成长经验心得.md'
    ]
  } else if (type == 4) {
    mapArr = [
      '/book/12_企业级数字中台新一代标准中台产品基座规划.md',
      '/book/13_带研发团队从0到1做数字中台技术转型_上.md',
      '/book/14_在很多情况下不建议盲目使用微服务架构.md',
      '/book/03_对大型互联网产品化战略和中台产品化的一些思考.md',
      '/book/17_对业务服务运维架构的一些设计思路.md',
    ]
  } else if (type == 5) {
    mapArr = [
      '/book/19_基于中台技术规避数字化建设基础层问题.md',
      '/book/18_带研发团队从0到1做数字中台技术转型_下.md',
      '/book/20_大型政务项目数字化研发平台架构建设和落地经验分享.md',
      '/book/21_数据中台建设和落地的一些经验总结.md',
      '/book/15_在微型团队管理数字中台产品的一些实践.md',
      '/book/18_在团队数字转型过程阐述和实战经验.md',
    ]
  } else if (type == 6) {
    mapArr = [
      '/book/21_从多城市落地中台的经验总结和标准化输出思考.md',
      '/book/24_把整个研发中台拆分过程的一些心得总结.md',
      '/book/22_对目前中台架构使用的的思考理解.md',
    ]
  } else if (type == 7) {
    mapArr = [
      '/book/23_从0到1建立一款软件产品的一些心得总结 .md' ,
    ]
  } else if (type == 8) {
    mapArr = [
      '/book/27_致谢.md',
    ]
  }

  return mapArr.map(i => {
    return i
  })
}
