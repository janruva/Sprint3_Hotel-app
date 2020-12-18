<template>
<div>
  <div id="User">

    <div class="titulo">
      <h2>
        Hola <span> {{ username }}, </span> ¡Te damos la bienvenida!
      </h2>
    </div>

  </div>
<div class="imagen">
  <v-img
  contain
  lazy-src="https://i3.visitchile.com/img/GalleryContent/112184/Galerias_6.jpg"
  max-height="600"
  max-width="1000"
  margin-right= center;
  margin-left= center;
  src="https://i3.visitchile.com/img/GalleryContent/112184/Galerias_6.jpg"
></v-img>
</div>
</div>

</template>

<script>
export default {
  name: "User",
  data: function () {
    return {
      username: "none",
    };
  },
  created: function () {
    this.username = this.$route.params.username;
  },
};
</script>

<style>
#User {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: right;
}

.imagen {
  display: flex;
  height: 71vh;
  align-content: center;
  margin: 0%;
  padding: 0%;
  justify-content: center;
  align-items: center;
  margin-right: center;
  margin-left: center;
}

#User h2 {
  font-size: 50px;
  color: #283747;
}
#User span {
  color: rgb(23, 20, 220);
  font-weight: bold;
}
</style>