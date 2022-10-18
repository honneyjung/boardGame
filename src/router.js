import { createWebHistory, createRouter } from "vue-router";
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

const routes = [
  {
    path: "/",
    name: "PageOne",
    component: PageOne,
    props: true,
  },
  {
    path: "/PageTwo/:id?",
    name: "PageTwo",
    component: PageTwo,
    props: true,
  },
  {
    path: "/PageThree/:id?",
    name: "PageThree",
    component: PageThree,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
