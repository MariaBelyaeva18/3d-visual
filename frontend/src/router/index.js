import AboutMePage from "../modules/aboutMe/pages/AboutMePage.vue";
import PortfolioPage from "../modules/portfolio/pages/PortfolioPage.vue";
import ContactsPage from "../modules/contacts/pages/ContactsPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import Interior from "../modules/portfolio/components/Interior.vue";
import Exterior_Integr from "../modules/portfolio/components/Exterior_Integr.vue";
import Modeling from "../modules/portfolio/components/Modeling.vue";
import Docs from "../modules/portfolio/components/Docs.vue";

const routes = [
    { path: '/', component: AboutMePage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/interior', component: Interior },
    { path: '/exterior', component: Exterior_Integr },
    { path: '/modeling', component: Modeling },
    { path: '/docs', component: Docs }
]


export const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

router.afterEach(() => {
    window.scrollTo(0, 0);
});