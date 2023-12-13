<template>
  <PortfolioLayout>
    <MainPage/>
    <Portfolio/>
    <Contacts/>
  </PortfolioLayout>
</template>

<script setup>
import PortfolioLayout from "./layout/PortfolioLayout.vue";
import MainPage from "./modules/portfolio/pages/MainPage.vue";
import About from "./modules/portfolio/components/About.vue";
import Works from "./modules/portfolio/components/Works.vue";
import Portfolio from "./modules/portfolio/pages/Portfolio.vue";
import Contacts from "./modules/portfolio/pages/Contacts.vue";
</script>