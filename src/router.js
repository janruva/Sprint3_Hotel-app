import vueRouter from 'vue-router'
import Home from './components/Home'
import User from './components/User'
import UserAuth from './components/UserAuth'
import UserRegistro from './components/UserRegistro'
import TipoRoom from './components/TipoRoom'
import Temporada from './components/Temporada'
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
        path: '/user/tipo_room/:username',
        name: "tipo_room",
        component: TipoRoom
    },
    {
        path: '/user/auth',
        name: "user_auth",
        component: UserAuth
    },
    {
        path: '/user/season/:username',
        name: "temporada",
        component: Temporada
    },
    ]
    })
    export default router