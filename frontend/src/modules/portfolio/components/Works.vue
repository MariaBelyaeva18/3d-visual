<template>
  <h1>Портфолио</h1>
  <section class = "works">

    <div class = "port">
      <div class = "port-item">
        <div class="x"><a href="portfolio.html"><img src="../../../assets/img/1.jpeg"/></a></div>
      </div>
      <div class = "port-item">
        <div class="x"><a href="portfolio.html"><img src="../../../assets/img/2.jpeg"/></a></div>
      </div>
      <div class = "port-item">
        <div class="x"><a href="portfolio.html"><img src="../../../assets/img/3.jpeg"/></a></div>
      </div>
      <div class = "port-item">
        <div class="x"><a href="portfolio.html"><img src="../../../assets/img/4.jpeg"/></a></div>
      </div>
    </div>
  </section>
</template>

<style>
.works {
  margin-top: -120px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding:10%;
  border-radius:15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.port {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
}
.port-item {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  height: 50%;
  text-align: center;
}

.works img{
  width:100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:20px;
}
.works{
  zoom:150%;
}


</style>
<script setup>
</script>