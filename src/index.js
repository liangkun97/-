
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import './assets/css/iconfont/iconfont.css'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import router from './router.js'

import app from './App.vue'

var vm = new Vue({
    el: document.getElementById('app'),
    render: c => c(app),
    router
})



