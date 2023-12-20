<template>
  <h1>Экстерьер</h1>
  <section class = "works">
    <div class = "port">
      <div class="port-item" v-for="image in photos" :key="image.id">
        <img :src="getImageUrl(image.src)" @click="ShowModal(image.id)"/>
        <div :id="image.id" class="modal-all" @click="HideModal()">
          <img :src="getImageUrl(image.src)"/>
        </div>
      </div>
    </div>
  </section>

  <OrderButton />

  <h1>Интеграции</h1>
  <section class = "works">
    <div class = "port">
      <div class="port-item" v-for="image in images" :key="image.id">
        <img :src="getImageUrl(image.src)" @click="ShowModal(image.id)"/>
        <div :id="image.id" class="modal-all" @click="HideModal()">
          <img :src="getImageUrl(image.src)"/>
        </div>
      </div>
    </div>
  </section>


  <OrderButton />
  <Form />

</template>

<script>
export default {
  data () {
    return {
      photos: [
        {src: 'ex1.jpg', id: "m21" },
        {src: 'ex2.jpg', id: "m22" },
        {src: 'ex3.jpg', id: "m23" },
        {src: 'ex4.jpg', id: "m24" },
      ],
      images: [
        {src: 'int1.jpg', id: "m31" },
        {src: 'int2.jpg', id: "m32" },
        {src: 'int3.jpg', id: "m33" },
        {src: 'int4.jpg', id: "m34" },
      ]
    }
  },
  methods: {
    ShowModal(elId) {
      let modalAll = document.getElementById(elId);
      modalAll.style.display = "flex";
    },

    HideModal() {
      if (event.target.classList.contains('modal-all')) {
        event.currentTarget.style.display = "none";
      }
    },

    getImageUrl(name) {
      return new URL(`/src/assets/img/portfolio/exterior/${name}`, import.meta.url).href
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