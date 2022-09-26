import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import Blog from '@/pages/Blog.vue'
import Contacts from '@/pages/Contacts.vue'


const routers = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/Products',
            name:'Products',
            component:Products
        },
        {
            path:'/Blog',
            name:'Blog',
            component:Blog
        },
        {
            path:'/Contacts',
            name:'Contacts',
            component:Contacts
        }
    ]
})

export default routers