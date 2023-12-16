<template>
  <h1>Почему выбирают меня?</h1>
  <section class="main">

    <div class = "textcols">
      <div class = "textcols-item">
        <div class="x"><img src="../../../assets/img/1.svg"/>
          <h3> Разносторонние навыки</h3>
          <li>Моделирование предметов мебели</li>
          <li>Создание материалов PBR</li>
          <li>Работа со светом</li>
          <li>Создание виртуального панорамного тура</li>
        </div>
      </div>
      <div class = "textcols-item">
        <div class="x"><img src="../../../assets/img/2.svg"/>
          <h3> Владею множеством программ </h3>
          <li>3ds Max</li>
          <li>Marvelous Designer</li>
          <li>Adobe Photoshop</li>
          <li>Corona Render</li>
          <li>AutoCAD</li>
        </div>
      </div>
      <div class = "textcols-item">
        <div class="x"><img src="../../../assets/img/3.svg"/>
          <h3>Со мной приятно работать </h3>
          <li>Тесно взаимодействую с дизайнером</li>
          <li>Умение работать с технической документацией, чертежами</li>
          <li>Высокий уровень самоорганизации</li>
          <li>Умение работать в команде</li>
        </div>
      </div>
    </div>

  </section>
</template>

<style>
.textcols {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 100px;
  gap: 8px;
}

.textcols-item {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  height: 50%;
  text-align: center;
  font-size: 24px;

}


.textcols img{
  width:150px;
  height: 150px;
}
</style>
<script setup>
</script>