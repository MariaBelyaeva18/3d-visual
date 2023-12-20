<template>
  <h1>Моделинг</h1>
  <section class = "works">
    <div class = "port">
      <div class="mod-item" v-for="image in images" :key="image.id">
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
      images: [
        {src: 'mod1.png', id: "m41" },
        {src: 'mod2.png', id: "m42" },
        {src: 'mod3.jpg', id: "m43" },
        {src: 'mod4.jpg', id: "m44" },
        {src: 'mod5.jpg', id: "m45" },
        {src: 'mod6.jpg', id: "m46" },
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
      return new URL(`/src/assets/img/portfolio/modeling/${name}`, import.meta.url).href
    }
  }
}
</script>

<script setup>
import OrderButton from "../../../layout/OrderButton.vue";
import Form from "./Form.vue";
</script>

<style>

.mod-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.mod-item img{
  width:300px;
  display: block;
  height: 300px;
}

</style>