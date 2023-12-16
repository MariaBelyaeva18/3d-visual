<template>
  <h1>Интерьер</h1>
  <section class = "works">
    <div class = "port">
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/z.png"/>
      </div>
    </div>
  </section>

  <OrderButton />

</template>

<script setup>

import OrderButton from "../../../layout/OrderButton.vue";

</script>

<style>

.port-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}


.works {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.works img{
  width:200px;
  display: block;
  margin: auto;
}
.works{
  zoom:150%;
}

</style>