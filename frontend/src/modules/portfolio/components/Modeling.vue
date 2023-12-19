<template>
  <h1>Моделинг</h1>
  <section class = "works">
    <div class = "port">
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod1.png" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod5.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod3.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod2.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod4.png" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod6.jpg" @click="zoomImage"/>
      </div>
    </div>
  </section>

  <OrderButton />
  <Form />

</template>

<script>
export default {
  methods: {
    zoomImage(event) {
      event.target.classList.toggle('zoomed');
    }
  }
}
</script>

<script setup>
import OrderButton from "../../../layout/OrderButton.vue";
import Form from "./Form.vue";
</script>

<style>


</style>