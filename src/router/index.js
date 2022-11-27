import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ListingView from "../views/ListingView.vue";
import RegisterView from "../views/RegisterView.vue";

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
      component: () => import("../views/ContactView.vue"),
    },
    {
      path:"/myReviews",
      name: "myReviews",
      component: () => import("../views/MyReviewsView.vue")
    },
    {
      path: "/listing/:id",
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
      path: "/login",
      name: "login",
      component: LoginView,
      props: true,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      props: true,
    }
  ],
});

export default router;
