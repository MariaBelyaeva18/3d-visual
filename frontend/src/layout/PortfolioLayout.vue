<template>
  <section class="layout">
    <header>
        <div class="header-container">
          <div class="logo">
            <h2>Natalia Belyaeva</h2>
          </div>

          <div class="navigation">
            <router-link to="/">Обо мне</router-link>
            <router-link to="/portfolio">Портфолио</router-link>
            <router-link to="/contacts">Контакты</router-link>
          </div>
        </div>
    </header>

   <router-view />
  </section>

</template>

<script>
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.66);
  color: white;
  display: flex;
  justify-content: center;
  height: 90px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.layout {
  padding-top: 90px;
}

.header-container {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 60px;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
}

</style>

