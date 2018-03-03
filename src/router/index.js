import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/Index'
import DetailPage from '@/pages/Detail'
import DetailAnaPage from '@/pages/detail/Analysis'
import DetailCouPage from '@/pages/detail/Count'
import DetailForePage from '@/pages/detail/Forecast'
import DetailPubPage from '@/pages/detail/Publish'
import OrderListPage from '@/pages/OrderList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
    	path: '/detail',
    	name: 'DetailPage',
    	component: DetailPage,
    	redirect: '/detail/count',
    	children: [
  			{
  				path: 'analysis',
  				component: DetailAnaPage
  			},
  			{
  				path: 'count',
  				component: DetailCouPage
  			},
  			{
  				path: 'forecast',
  				component: DetailForePage
  			},
  			{
  				path: 'publish',
  				component: DetailPubPage
  			}
    	]
    },
    {
      path: '/orderList',
      component: OrderListPage
    }
  ]
})
