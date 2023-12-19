<template>
  <h1>Моделинг</h1>
  <section class = "works">
    <div class = "port">

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod1.png" @click="ShowModal('m21')"/>
      </div>
      <div id="m21" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/modeling/mod1.png"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod5.jpg" @click="ShowModal('m25')"/>
      </div>
      <div id="m25" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/modeling/mod5.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod3.jpg" @click="ShowModal('m23')"/>
      </div>
      <div id="m23" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/modeling/mod3.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod2.jpg" @click="ShowModal('m22')"/>
      </div>
      <div id="m22" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/modeling/mod2.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod4.png" @click="ShowModal('m24')"/>
      </div>
      <div id="m24" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/modeling/mod4.png"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/modeling/mod6.jpg" @click="ShowModal('m26')"/>
      </div>
      <div id="m26" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/modeling/mod6.jpg"/>
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