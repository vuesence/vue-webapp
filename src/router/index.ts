import { createRouter, createWebHashHistory } from "vue-router";

import { routes } from "./routes.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
