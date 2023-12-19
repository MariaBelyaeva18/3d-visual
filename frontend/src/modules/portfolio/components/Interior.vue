<template>
  <h1>Интерьер</h1>
  <section class = "works">
    <div class = "port">
      <div class="port-item" >
        <img src ="../../../assets/img/portfolio/interior/inter1.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter2.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter3.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter4.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter5.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter6.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter7.jpg" @click="zoomImage"/>
      </div>
      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter8.jpg" @click="zoomImage"/>
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
      const images = document.querySelectorAll('.port-item img');
      // Remove 'zoomed' class from all images
      images.forEach(image => {
        if (image !== event.target) {
          image.classList.remove('zoomed');
        }
      });
      // Toggle 'zoomed' on the clicked image
      event.target.classList.toggle('zoomed');
    }
  }
}
</script>

<script setup>
import OrderButton from "../../../layout/OrderButton.vue";
import Form from "./Form.vue";
import { vShow } from 'vue';
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

.works img.zoomed {
  transition: 1s;
  transform: scale(2);
  z-index: 1;
}

</style>