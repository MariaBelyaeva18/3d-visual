<template>
  <section class="contacts">
    <h2>Контакты</h2>


   <div class="items-container">
     <div class="contacts__item">
       <img src="../../../assets/img/contacs/name.svg">
       <span>Беляева Наталья Васильевна</span>
     </div>
     <div class="contacts__item">
       <img src="../../../assets/img/contacs/mail.svg">
       <a href="mailto:belnat2312@yandex.ru">belnat2312@yandex.ru</a>
     </div>
     <div class="contacts__item">
       <img src="../../../assets/img/contacs/phone.svg">
       <a href="tel:+79036468733">+7-(903)-646-87-33</a>
     </div>
     <div class="contacts__item">
       <img src="../../../assets/img/contacs/telegram.svg">
       <a href="https://t.me/tridvisual_natalya" target="_blank">@tridvisual_natalya</a>
     </div>
   </div>

  </section>
</template>

<script setup>

</script>

<style scoped>

.contacts {
  width: 500px;
  height: 316px;
  background-color: #d2d2d2;
  border-radius: 30px;
  margin: 58px auto auto auto;
  color: black
}

a {
  color: black;
}

.items-container {
  padding-left: 17%;
  margin-top: 15px;
}

.contacts__item {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 22px;
}

.contacts__item img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
</style>