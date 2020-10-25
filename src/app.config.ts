export default {
  pages: [
    'pages/index/index',
    'pages/log/log'
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
        iconPath: '',
        selectedIconPath: '',
        text: '首页'
      },
      { 
        pagePath: 'pages/log/log',
        iconPath: '',
        selectedIconPath: '',
        text: '首页'
      }
    ]
  }
}
