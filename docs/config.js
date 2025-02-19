module.exports = {
  base: '/pxx_project/dist',
  title: '技术中心软件说明',
  description: '技术中心软件说明',
  themeConfig: {
    sidebar: [
      ['/', '简介'],
      {
        title: '开发组',
        collapsable: false,
        children: [
          ['/group/xian/', '西安组'],
          ['/group/zhengzhou/', '郑州组'],
          ['/group/hangzhou/', '杭州组'],
          ['/group/shenzhen/', '深圳组']
        ]
      },
      {
        title: '软件用途',
        collapsable: false,
        children: [
          ['/purpose/qywz/', '企业网站'],
          ['/purpose/ltsj/', '论坛社交'],
          ['/purpose/qyyy/', '企业应用'],
          ['/purpose/yxhd/', '营销活动']
        ]
      }
    ]
  },
  sidebarDepth: 2
}
