import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import MovieDetailes from "../views/MovieDetailes.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/movie/:id",
    name: "Detailed",
    component: MovieDetailes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
