import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './views/Home.vue'
import HomeIndex from './components/home/Index.vue'
// import Follow from './components/home/Follow.vue'

import Friends from './components/friends/Friends.vue'
import Account from './components/account/Account.vue'
import Message from './components/message/Message.vue'

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: HomeIndex
                },
                {
                    path: '/friends',
                    name: 'friends',
                    component: Friends,
                },
                {
                    path: '/message',
                    name: 'message',
                    component: Message,
                },
                {
                    path: '/account',
                    name: 'account',
                    component: Account,
                }
                //  {
                //     path: '/follow',
                //     name: 'follow',
                //     component: Follow
                // }
            ]
        }


    ]
})

export default router