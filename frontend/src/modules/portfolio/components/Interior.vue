<template>
  <h1>Интерьер</h1>
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
      images: [
        {src: 'inter1.jpg', id: "m11" },
        {src: 'inter2.jpg', id: "m12" },
        {src: 'inter3.jpg', id: "m13" },
        {src: 'inter4.jpg', id: "m14" },
        {src: 'inter5.jpg', id: "m15" },
        {src: 'inter6.jpg', id: "m16" },
        {src: 'inter7.jpg', id: "m17" },
        {src: 'inter8.jpg', id: "m18" },
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
      return new URL(`/src/assets/img/portfolio/interior/${name}`, import.meta.url).href
    }
  }
}
</script>

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

.port-item img{
  width:400px;
  display: block;
  height: 300px;
}

.modal-all {
  display: none;
  background: rgba(20, 20, 20, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  align-items: center;
  align-content: center;
  justify-content: center;
  transform: scale(3);
  z-index: 1;
}
</style>