
// ref: https://umijs.org/config/
export default {
  antd: {
    dark: false,
    compact: true
  },
  dva: false,
  title: 'umi-app',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path: '/test01', component: '../pages/test01/_layout',
          // exact:true,
          routes: [
            { path: '/test01/test01', component: '../pages/test01/test01' }
          ]
        },
        {
          path: '/dynamic_routes', routes: [
            { path: '/dynamic_routes/:id', component: '../pages/dynamic_routes/[id]' }
          ]
        },
        { component: '../pages/404' }
      ]
    }
  ]
}
