import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListingView from "../views/ListingView.vue";
import LoginView from "../views/LoginView.vue";
import MyReviewsView from "../views/MyReviewsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home/:userId",
      name: "home",
      component: HomeView,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/Users.vue"),
    },
    {
      path: "/companies",
      name: "companies",
      component: () => import("../views/CompanyList.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/myReviews/:userId",
      name: "myReviews",
      component: MyReviewsView,
      props: true,
    },
    {
      path: "/listing/:userId/:id",
      name: "listing",
      component: ListingView,
      props: true,
    },
    {
      path: "/compare",
      name: "compare",
      component: () => import("../views/CompareView.vue"),
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
      props: true,
    },
  ],
});

export default router;
