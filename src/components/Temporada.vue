<template>
<div class="seas">
  <div id="Temporada">
    <h2>Precios por Temporada</h2>
    <div>      
          <table class="table table-success table-striped">
          <tr>
            <th>Baja</th>
            <th>Media</th>
            <th>Alta</th>
          </tr>
          <tr>
            <td>$ {{rooms.tarifa_basica}}</td>
            <td>$ {{rooms.tarifa_basica * 1.30}}</td>
            <td>$ {{rooms.tarifa_basica * 1.50}}</td>
          </tr>
          </table>
      <navi>
        <button type="button" class="btn btn-dark" v-on:click="reserva">Reservar</button>     
      </navi>
      
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "Temporada",
  data: function () {
    return {
      username: "",
      rooms: null
    };
  },
  methods: {
    reserva: function(){
      alert("Si reserva se realizó con éxito");
    }
    },

  created: function () {
    this.username = this.$route.params.username; //Obtiene el nombre de usuario de localstorage
    let self = this; // captura el this en axios para usarlo
    axios
      .get("https://seasonhotel-api.herokuapp.com/user/season/"+ this.username)
      .then((response) => {     // se ejecuta cuando todo sale bien
        self.rooms = response.data;
      })
      .catch((error) => {
        alert("ERROR en el Servidor");
      });
  },
};
</script>
<style>
.seas {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.seas h2 {
  display: flex;
  justify-content: center;
  font-size: 60px;
  padding: 50px;
  font-weight: bold;
  color: rgb(23, 20, 220);
}

td {
  text-align: center;
}


</style>