import { createApp } from "vue";

import "./assets/scss/style.scss";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { api } from "@/services/api";

const app = createApp(App);
app.use(router);
loadIcons();
api.init();

await Promise.all([
  router.isReady(),
]);

app.mount("#app");
