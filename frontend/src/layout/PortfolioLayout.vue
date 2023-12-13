<template>
  <section>
    <header class="sticky">
        <div class="logo">
          <h1>Natalia Belyaeva</h1>
        </div>
        <div class="top-menu">
          <ul>
            <li><a href="#/about">Обо мне</a></li>
            <li><a href="#/works">Портфолио</a></li>
            <li><a href="#/contacts">Контакты</a></li>
          </ul>
        </div>
    </header>

    <slot />

    <header class="menu">
      Natalia Belyaeva, 2023
    </header>
  </section>

</template>

<script>
import {computed, ref} from 'vue'
import Main from '../modules/portfolio/pages/MainPage.vue'
import Portfolio from "../modules/portfolio/pages/Portfolio.vue";
import Contacts from "../modules/portfolio/pages/Contacts.vue";


const routes = {
  '/about': Main,
  '/works': Portfolio,
  '/contacts': Contacts
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })

</script>

<style>
header {
  /*background-image: url("../assets/img/background-menu-bottom.png");*/
  background-color: rgba(0, 0, 0, 0.66);
  color: white;
  height: 80px;
  justify-content: center;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5% 0 0 30%;
}

.menu {
  display: flex;
  align-items: center;
}

.logo, .top-menu {
  margin-right:50px;
  margin-left: 20px;
  display: inline-block;
}

.top-menu li{

  margin-right: 35px;
  display: inline-block;
}

.top-menu a {
  font-size: 20px;
  color: white;
}

.logo h1{
  font-size: 25px;
}
</style>

