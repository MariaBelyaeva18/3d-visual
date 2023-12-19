<template>
  <h1>Интерьер</h1>
  <section class = "works">
    <div class = "port">

      <div class="port-item" >
        <img src ="../../../assets/img/portfolio/interior/inter1.jpg" @click="ShowModal('m1')"/>
      </div>
      <div id="m1" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter1.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter2.jpg" @click="ShowModal('m2')"/>
      </div>
      <div id="m2" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter2.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter3.jpg" @click="ShowModal('m3')"/>
      </div>
      <div id="m3" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter3.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter4.jpg" @click="ShowModal('m4')"/>
      </div>
      <div id="m4" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter4.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter5.jpg" @click="ShowModal('m5')"/>
      </div>
      <div id="m5" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter5.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter6.jpg" @click="ShowModal('m6')"/>
      </div>
      <div id="m6" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter6.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter7.jpg" @click="ShowModal('m7')"/>
      </div>
      <div id="m7" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter7.jpg"/>
      </div>

      <div class = "port-item">
        <img src ="../../../assets/img/portfolio/interior/inter8.jpg" @click="ShowModal('m8')"/>
      </div>
      <div id="m8" class="modal-all" @click="HideModal()">
        <img src ="../../../assets/img/portfolio/interior/inter8.jpg"/>
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
import { vShow } from 'vue';
</script>

<style>

.port-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.works {
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