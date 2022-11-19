import { createRouter, createWebHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import HomeView from "../views/HomeView.vue";
import ListingView from "../views/ListingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/Users.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/listing/:id",
      name: "listing",
      component: ListingView,
      props: true,
    },
    {},
  ],
});

export default router;
