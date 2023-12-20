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
        {src: '1.jpeg', id: "m51", text: "Титульный лист" },
        {src: '2.jpeg', id: "m52", text: "Ведомость рабочих чертежей" },
        {src: '3.jpeg', id: "m53", text: "Обмерный план" },
        {src: '4.jpeg', id: "m54", text: "План демонтажа" },
        {src: '5.jpeg', id: "m55", text: "План возводимых перегородок" },
        {src: '6.jpeg', id: "m56", text: "План расстановки мебели" },
        {src: '7.jpeg', id: "m57", text: "План расположения электроприборов (розеток и электровыводов)" },
        {src: '8.jpeg', id: "m58", text: "План расположения светильников" },
        {src: '9.jpeg', id: "m59", text: "План расположения выключателей" },
        {src: '10.jpeg', id: "m510", text: "План потолков" },
        {src: '11.jpeg', id: "m511", text: "План полов" },
        {src: '12.jpeg', id: "m512", text: "План сантехнических выпусков" },
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