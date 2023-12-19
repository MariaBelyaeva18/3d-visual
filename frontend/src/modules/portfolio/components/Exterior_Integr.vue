<template>
  <h1>Экстерьер</h1>
  <section class = "works">
    <div class = "port">

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex1.jpg" @click="ShowModal('m31')"/>
      </div>
      <div id="m31" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/exterior/ex1.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex2.jpg" @click="ShowModal('m32')"/>
      </div>
      <div id="m32" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/exterior/ex2.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex3.jpg" @click="ShowModal('m33')"/>
      </div>
      <div id="m33" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/exterior/ex3.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/exterior/ex4.jpg" @click="ShowModal('m34')"/>
      </div>
      <div id="m34" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/exterior/ex4.jpg"/>
      </div>

    </div>
  </section>

  <OrderButton />

  <h1>Интеграции</h1>
  <section class = "works">
    <div class = "port">

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int1.jpg" @click="ShowModal('m41')"/>
      </div>
      <div id="m41" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/integration/int1.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int2.jpg" @click="ShowModal('m42')"/>
      </div>
      <div id="m42" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/integration/int2.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int3.jpg" @click="ShowModal('m43')"/>
      </div>
      <div id="m43" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/integration/int3.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/integration/int4.jpg" @click="ShowModal('m44')"/>
      </div>
      <div id="m44" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/integration/int4.jpg"/>
      </div>

    </div>
  </section>


  <OrderButton />
  <Form />

</template>

<script>
export default {
  methods: {
    ShowModal(elId) {
      let modalAll = document.getElementById(elId);
      modalAll.style.display = "flex";
    },

    HideModal() {
      if (event.target.classList.contains('modal-all')) {
        event.currentTarget.style.display = "none";
      }
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