<template>
  <section>
    <div class="main_text">
      <h1 class="text_head">Рабочая документация</h1>
      <h1 class="text_head">дизайн-проекта интерьера</h1>
      <h2 class="text_lower_head">Пример рабочей документации</h2>
    </div>

    <div class="image-grid">
      <div class="image-cell">
        <img src="../../../assets/img/docs/1.jpeg" alt="Image 1" @click="ShowModal('m51')">
        <p>Титульный лист</p>
      </div>
      <div id="m51" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/2.jpeg" alt="Image 2" @click="ShowModal('m52')">
        <p>Ведомость рабочих чертежей</p>
      </div>
      <div id="m52" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/2.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/3.jpeg" alt="Image 3" @click="ShowModal('m53')">
        <p>Обмерный план</p>
      </div>
      <div id="m53" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/4.jpeg" alt="Image 4" @click="ShowModal('m54')">
        <p>План демонтажа</p>
      </div>
      <div id="m54" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/5.jpeg" alt="Image 5" @click="ShowModal('m55')">
        <p>План возводимых перегородок</p>
      </div>
      <div id="m55" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/6.jpeg" alt="Image 6" @click="ShowModal('m56')">
        <p>План расстановки мебели</p>
      </div>
      <div id="m56" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/7.jpeg" alt="Image 7" @click="ShowModal('m57')">
        <p>План расположения электроприборов (розеток и электровыводов)</p>
      </div>
      <div id="m57" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/8.jpeg" alt="Image 8" @click="ShowModal('m58')">
        <p>План расположения светильников</p>
      </div>
      <div id="m58" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/9.jpeg" alt="Image 9" @click="ShowModal('m59')">
        <p>План расположения выключателей</p>
      </div>
      <div id="m59" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/10.jpeg" alt="Image 10" @click="ShowModal('m510')">
        <p>План потолков</p>
      </div>
      <div id="m510" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/11.jpeg" alt="Image 11" @click="ShowModal('m511')">
        <p>План полов</p>
      </div>
      <div id="m511" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

      <div class="image-cell">
        <img src="../../../assets/img/docs/12.jpeg" alt="Image 12" @click="ShowModal('m512')">
        <p>План сантехнических выпусков</p>
      </div>
      <div id="m512" class="modal-doc" @click="HideModal()">
        <img src ="../../../assets/img/docs/1.jpeg"/>
      </div>

    </div>
  </section>

  <OrderButton style="margin-bottom: 60px"/>
  <Form />

</template>

<script>
export default {
  methods: {
    ShowModal(elId) {
      let modalDoc = document.getElementById(elId);
      modalDoc.style.display = "flex";
    },

    HideModal() {
      if (event.target.classList.contains('modal-doc')) {
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
.image-cell {
  text-align: center;
}

.image-cell img {
  width: 400px;
  height: auto;
}

.image-cell p {
  margin-bottom: 40px;
  font-size: 25px;
}

.modal-doc {
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
  transform: scale(1.2);
  z-index: 1;
}
</style>