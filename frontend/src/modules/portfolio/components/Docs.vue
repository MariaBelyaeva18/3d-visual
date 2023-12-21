<template>
  <section>
    <div class="main_text">
      <h1 class="text_head">Рабочая документация</h1>
      <h1 class="text_head">дизайн-проекта интерьера</h1>
      <h2 class="text_lower_head">Пример рабочей документации</h2>
    </div>
  </section>

  <section class = "docs">
    <div class = "port">
      <div class="doc-item" v-for="image in images" :key="image.id">
        <img :src="getImageUrl(image.src)" @click="ShowModal(image.id)"/>
        <p>{{ image.text }}</p>
        <div :id="image.id" class="modal-all" @click="HideModal()">
          <img :src="getImageUrl(image.src)"/>
        </div>
      </div>
    </div>
  </section>

  <OrderButton style="margin-bottom: 60px"/>
  <Form />

</template>

<script>
export default {
  data () {
    return {
      images: [
        {src: '1.png', id: "m51", text: "Ведомость чертежей" },
        {src: '2.png', id: "m52", text: "План этажа" },
        {src: '3.png', id: "m53", text: "Обмерный план" },
        {src: '4.png', id: "m54", text: "План экспликации помещений" },
        {src: '5.png', id: "m55", text: "План-схема дверей" },
        {src: '6.png', id: "m56", text: "План монтажа" },
        {src: '7.png', id: "m57", text: "План напольных покрытий" },
        {src: '8.png', id: "m58", text: "План напольных плинтусов" },
        {src: '9.png', id: "m59", text: "План размещения светильников" },
        {src: '10.png', id: "m510", text: "План размещения выключателей" },
        {src: '11.png', id: "m511", text: "Развертки стен" },
        {src: '12.png', id: "m512", text: "Развертки стен" },
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
      return new URL(`/src/assets/img/portfolio/docs/${name}`, import.meta.url).href
    }
  }
}
</script>

<script setup>
import OrderButton from "../../../layout/OrderButton.vue";
import Form from "./Form.vue";
</script>

<style>
.doc-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.docs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.docs img{
  width:400px;
  display: block;
  height: auto;
  margin: auto;
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

p {
  font-size: 14pt;
}

</style>