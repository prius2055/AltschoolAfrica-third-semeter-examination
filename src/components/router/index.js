import { createRouter, createWebHistory } from "vue-router";

import RepoList from "../pages/RepoList.vue";
import MyRepo from '../pages/MyRepo.vue'
import WelcomePage from "../pages/WelcomePage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
  },

  {
    path: "/repoList",
    name: "RepoList",
    component: RepoList,
  },

  {
    path: '/repoList/:id',
    name: 'MyRepo',
    component:MyRepo,
  },

  {
    path: "/:ErrorPage(.*)*",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
