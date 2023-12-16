<template>
  <section>
    <div class="main_text">
      <h1 class="text_head">Рабочая документация</h1>
      <h1 class="text_head">дизайн-проекта интерьера</h1>
      <h2 class="text_lower_head">Пример рабочей документации</h2>
    </div>

    <div class="image-grid">
      <div class="image-cell">
        <img src="../../../assets/img/docs/1.jpeg" alt="Image 1">
        <p>Титульный лист</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/2.jpeg" alt="Image 2">
        <p>Ведомость рабочих чертежей</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/3.jpeg" alt="Image 3">
        <p>Обмерный план</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/4.jpeg" alt="Image 4">
        <p>План демонтажа</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/5.jpeg" alt="Image 5">
        <p>План возводимых перегородок</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/6.jpeg" alt="Image 6">
        <p>План расстановки мебели</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/7.jpeg" alt="Image 7">
        <p>План расположения электроприборов (розеток и электровыводов)</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/8.jpeg" alt="Image 8">
        <p>План расположения светильников</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/9.jpeg" alt="Image 9">
        <p>План расположения выключателей</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/10.jpeg" alt="Image 10">
        <p>План потолков</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/11.jpeg" alt="Image 11">
        <p>План полов</p>
      </div>
      <div class="image-cell">
        <img src="../../../assets/img/docs/12.jpeg" alt="Image 12">
        <p>План сантехнических выпусков</p>
      </div>

    </div>
  </section>

  <OrderButton style="margin-bottom: 60px"/>

</template>

<script setup>

import OrderButton from "../../../layout/OrderButton.vue";
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

</style>