export default {
  pages: [
    'pages/log/log',
    'pages/index/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true, // 为true 开启自定义导航
    list: [
      { 
        pagePath: 'pages/index/index',
        iconPath: 'static/images/heigshouye_9_12.9@2x.png',
        selectedIconPath: 'static/images/honghuiyuan_9_12.9@2x.png',
        text: '首页'
      },
      { 
        pagePath: 'pages/log/log',
        iconPath: 'static/images/heigshouye_9_12.9@2x.png',
        selectedIconPath: 'static/images/honghuiyuan_9_12.9@2x.png',
        text: '首页'
      }
    ]
  }
}
