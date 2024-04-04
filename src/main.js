import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./views/landingPage.vue";
import fetch from "./views/fetch.vue";

/* Vuetify */
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: "/", component: LandingPage },
  {
    path: "/fetch",
    component: fetch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).mount("#app");
