<template>
<div class="todo">
  <div id="TipoRoom">
    <h2>{{ username }}</h2>
    <div>

    
      
        <table>
          <table class="table table-dark table-hover">
          <tr>
            <th>Id_room</th>
            <th>Tipo de Habitación</th>
            <th>Camas</th>
            <th>Ocupación</th>
            <th>Superficie</th>
            <th>Vistas</th>
            <th>A partir de</th>
          </tr>

          <tr>
            <td>{{rooms.id_room}}</td>
            <td>{{rooms.tipo_room}}</td>
            <td>{{rooms.camas}}</td>
            <td>{{rooms.ocupacion}}</td>
            <td>{{rooms.superficie}}</td>
            <td>{{rooms.vistas}}</td>
            <td>{{rooms.tarifa_basica}}</td>
          </tr>
          </table>
        </table>
      
    

      <div>
        <b-table striped hover :items="rooms"></b-table>
      </div> 
      
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "TipoRoom",
  data: function () {
    return {
      rooms: null
    };
  },
  created: function () {
    this.username = this.$route.params.username; //Obtiene el nombre de usuario de localstorage
    let self = this; // captura el this en axios para usarlo
    axios
      .get("https://seasonhotel-api.herokuapp.com/room/Superior")
      .then((response) => {     // se ejecuta cuando todo sale bien
        self.rooms = response.data;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>
<style>
.todo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.todo h2 {
  display: flex;
  justify-content: center;
  font-size: 60px;
  padding: 50px;
}

td {
  text-align: center;
}
th {
  text-align: center;
}
table { 
  justify-content: center;
  width: 100%;
  height: 100%;
}

td:first-child {
  width: 2px;
}
</style>