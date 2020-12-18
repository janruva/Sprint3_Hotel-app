<template>
  <div id="Home">
    <h2>
      <span>Bienvenido a Nuestro Season Hotels</span>
    </h2>
    <div class="container">
  
  <ul class="slider">
    <li id="slide1">
      <img src="https://i.ibb.co/GHC4J8j/Imagen6.png"/>
    </li>
    <li id="slide2">
      <img src="https://i.ibb.co/WFRSMQM/Imagen7.png"/>
    </li>
    <li id="slide3">
      <img src="https://i.ibb.co/6Hs3PBm/Imagen8.png"/>
    </li>

  </ul>
  
  <ul class="menu">
    <li>
      <a href="#slide1"></a>
    </li>
    <li>
      <a href="#slide2"></a>
    </li>
     <li>
      <a href="#slide3"></a>
    </li>
  </ul>
  
</div>
  </div>
</template>

<script>

</script>

<style>
#Home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
}
#Home h2 {
  font-size: 50px;
  color: #283747;
}
#Home span {
  color: rgb(23, 20, 220);
  font-weight: bold;
}
body{
  background-color: rgb(141, 124, 124);
  font-family: sans-serif;
}

.container{
  margin: auto;
  background-color: rgba(255, 255, 255, 0.274);
  width: 2000px;
  padding: 30px;
}

ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
}

ul.slider{
  position: relative;
  
  margin: auto;
  width: 1080px;
  height: 550px;
}

ul.slider li {
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    width: inherit;
    height: inherit;
    transition: opacity .5s;
    background:rgba(255, 255, 255, 0.356);
}

ul.slider li img{
  width: 100%;
  height: 550px;
  object-fit: cover;
}

ul.slider li:first-child {
    opacity: 1; /*Mostramos el primer <li>*/
}

ul.slider li:target {
    opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}

.menu{
  text-align: center;
  height: 0px;
  

  
}

.menu li{
  display: inline-block;

  
}

.menu li a{
  
  color: rgba(15, 0, 149, 0.226);

  background-color: rgba(2, 0, 105, 0.171);
  padding: 10px;

  font-size: 1px;
  border-radius: 100%;
}
</style>
