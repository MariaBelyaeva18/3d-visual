<template>
  <h1>Экстерьер</h1>
  <section class = "works">
    <div class = "port">
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex1.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex2.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex3.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex4.jpg"/>
      </div>
    </div>
  </section>

  <OrderButton />

  <h1>Интеграции</h1>
  <section class = "works">
    <div class = "port">
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int1.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int2.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int3.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int4.jpg"/>
      </div>
    </div>
  </section>


  <OrderButton />
  <Form />

</template>

<script setup>

import OrderButton from "../../../layout/OrderButton.vue";
import Form from "./Form.vue";
</script>

<style>

</style>