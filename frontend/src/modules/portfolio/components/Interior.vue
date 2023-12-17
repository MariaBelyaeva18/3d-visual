<template>
  <h1>Интерьер</h1>
  <section class = "works">
    <div class = "port">
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter1.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter2.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter3.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter4.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter5.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter6.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter7.jpg"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter8.jpg"/>
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