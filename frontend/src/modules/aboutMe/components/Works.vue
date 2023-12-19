<template>
  <h1>Портфолио</h1>
  <section class = "works">

    <div class = "port">
      <router-link to="/interior"><img class="work_item" src="../../../assets/img/int.jpg"/></router-link>
      <router-link to="/exterior"><img class="work_item" src="../../../assets/img/ex.jpg"/></router-link>
      <router-link to="/modeling"><img class="work_item" src="../../../assets/img/mod.jpg"/></router-link>
      <router-link to="/docs"><img class="work_item" src="../../../assets/img/cher.jpg"/></router-link>
    </div>

  </section>
</template>

<style>
.works {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 0;
  padding-bottom: 39px;
}

.port {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.works img{
  display: block;
}

.works{
  zoom:150%;
}

.work_item {
  transition: 0.5s;
  z-index: 2;
}

.work_item:hover {
  transform: scale(1.05);
  z-index: 2;
}

</style>
<script setup>
</script>