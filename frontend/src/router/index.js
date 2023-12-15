import AboutMePage from "../modules/aboutMe/pages/AboutMePage.vue";
import PortfolioPage from "../modules/portfolio/pages/PortfolioPage.vue";
import ContactsPage from "../modules/contacts/pages/ContactsPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/about', component: AboutMePage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/contacts', component: ContactsPage }
]


export const router = createRouter({
    routes: routes,
    history: createWebHistory()
})