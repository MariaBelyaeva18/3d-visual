<template>
  <section class="about">
    <div class="section-about">
      <img src="../../../assets/img/mama.jpg"/>
      <div class="about-text">
        <h1>Обо мне</h1>
        <h5>3D-визуализатор</h5>
        <p>Профессиональный 3D визуализатор, постоянно
          стремящийся улучшить процесс и результат
          работы.</p>
        <p>Специализируюсь на создании визуальных
          ресурсов для интерьеров и экстерьеров.
          Соблюдаю сроки и четко выполняю
          поставленные задачи.</p>
      </div>
    </div>
  </section>
</template>

<style>
.about{
  width: 100%;
  padding: 78px 0px;
  background-color: white;
}
.about img{
  height:auto;
  width:420px;
  border-radius: 100%;
}
.about-text{
  margin-left: 20px;
  width: 550px;
}
.section-about{
  width: 1130px;
  max-width: 95%;
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content:space-around;
}
.about-text h1{
  text-align:left;
  margin-bottom: 20px;
}
.about-text h5{
  font-size:25px;
  text-align:left;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
}
.about-text p{
  text-align:left;
  letter-spacing: 1px;
  line-height: 28px;
  font-size:18px;

  margin-bottom: 20px;
}


</style>
