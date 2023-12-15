<template>
  <h1>Портфолио</h1>
  <section class = "works">

    <div class = "port">
      <div >
        <div ><a href="portfolio.html"><img src="../../../assets/img/1.jpeg"/></a></div>
      </div>
      <div >
        <div ><a href="portfolio.html"><img src="../../../assets/img/2.jpeg"/></a></div>
      </div>
      <div >
        <div ><a href="portfolio.html"><img src="../../../assets/img/3.jpeg"/></a></div>
      </div>
      <div >
        <div ><a href="portfolio.html"><img src="../../../assets/img/4.jpeg"/></a></div>
      </div>
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
  margin-bottom: 60px;
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


</style>