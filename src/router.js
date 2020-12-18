import vueRouter from 'vue-router'
import User from './components/User'
import Home from './components/Home'
import UserRegistro from './components/UserRegistro'
import TipoRoom from './components/TipoRoom'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
    {
    path: '/',
    name: "root",
    component: App
    },
    {
        path: '/home',
        name: "home",
        component: Home
    },

    {
        path: '/user/:username',
        name: "user",
        component: User
    },

    {
        path: '/user/room/:username',
        name: "user_registro",
        component: UserRegistro
    },    

    {
        path: '/room/Superior',
        name: "tipo_room",
        component: TipoRoom
    },
    ]
    })
    export default router