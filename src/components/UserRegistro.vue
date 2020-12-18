<template>
  <div id="UserRegistro">
    <h2>{{ username }}</h2>
    <h2>
      <span> {{ estado }}  </span>
    </h2>
    <div class="imagen2">
  <v-img
  contain
  lazy-src="https://i.ibb.co/1bNWr2J/Imagen9.jpg"
  max-height="600"
  max-width="1000"
  margin-right= center;
  margin-left= center;
  src="https://i.ibb.co/1bNWr2J/Imagen9.jpg"
></v-img>
</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserRegistro",
  data: function () {
    return {
      username: "",
      estado: "none",
    };
  },
  created: function () {
    this.username = this.$route.params.username;
    let self = this;
    axios
      .get("http://127.0.0.1:8000/user/room/" + this.username)
      .then((result) => {
        self.estado = result.data.estado;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};

</script>
<style>


#UserRegistro h2 {
  font-size: 50px;
  color: rgb(23, 20, 220);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: right;
}
#UserRegistro span {
  color: crimson;
  font-weight: bold;
}
.imagen2 {
  display: flex;
  height: 60vh;
  align-content: center;
  margin: 0%;
  padding: 0%;
  justify-content: center;
  align-items: center;
  margin-right: center;
  margin-left: center;
}
</style>
