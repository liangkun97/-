import VueRouter from 'vue-router'

// 导入路由对象
import MessageComponent from './component/tabbar/MessageComponent.vue'
import BookComponent from './component/tabbar/BookComponent.vue'
import MemberComponent from './component/tabbar/MemberComponent.vue'
import AppComponent from './component/tabbar/AppComponent.vue'
import personInfo from './component/user/personInfo.vue'


var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/homeMessage' },
        { path: '/homeMessage', component: MessageComponent },
        { path: '/homeApp', component: AppComponent },
        { path: '/homeMember', component: MemberComponent },
        { path: '/homeBook', component: BookComponent },
        { path: '/personInfo', component: personInfo }
    ],
    // 覆盖默认的路由高亮的类，默认的类叫做 router-link
    linkActiveClass: 'mui-active'
})


export default router



