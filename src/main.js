import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/CarCard.css";
import "./assets/main.css";

import axios from "axios";
import VueAxios from "vue-axios";

import vSelect from "vue-select";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.component("v-select", vSelect);
app.mount("#app");
