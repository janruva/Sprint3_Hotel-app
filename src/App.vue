<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Season Hotels</h1>
      <nav>
        <button v-on:click="getUser" v-if="is_auth">Home</button>
        <button v-on:click="init" v-if="is_auth">Login</button>
        <button v-on:click="getRegistro" v-if="is_auth">Registro</button>
        <button v-on:click="getRoom" v-if="is_auth">Habitación</button>
        <button v-on:click="getSeason" v-if="is_auth">Temporada</button>
        <button v-on:click="logOut" v-if="is_auth" >Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view v-on:log-in="logIn" ></router-view>
    </div>
    <div class="footer">
      <h2>Tu mejor alternativa</h2>
    </div>
  </div>
</template>

<script>

import vueRouter from 'vue-router'

export default {
  name: 'App',

  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
    components: {
    },

  methods: {
      updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "home"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "home", params:{username:username}})
      }
    },

    getUser: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{username:username}})
      }
    },

    getRegistro: function(){
      if(this.$route.name != "user_registro"){
        let username = localStorage.getItem("current_username")
        this.$router.push({ name:"user_registro", params:{username:username}})
      }
    },

    getRoom: function(){
      if(this.$route.name != "tipo_room"){
        let username = localStorage.getItem("current_username")
        this.$router.push({ name:"tipo_room", params:{username:username}})
      }
    },
    getSeason: function(){
      if(this.$route.name !="temporada"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "temporada", params:{username:username}})
      }
    },
  },
  created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }
  }
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #db7f16;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 20%;
  text-align: center;
  font-size: 60px;
  width: 30%;
}
.header nav {
  height: 100%;
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button {
  color: #e5e7e9;
  background: #db7f16;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  border: 1px solid #e5e7e9;
  border-radius: 50px;
  padding: 5px 20px;
}
.header nav button:hover {
  color: #2800aa;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 78.7vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
  background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 8vh;
  min-height: 100px;
  background-color: #db7f16;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  color: #e5e7e9;
  
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
