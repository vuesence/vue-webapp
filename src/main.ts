import { createApp } from "vue";

import "./assets/scss/style.scss";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";

const app = createApp(App);
app.use(router);
loadIcons();

await Promise.all([
  router.isReady(),
]);

app.mount("#app");
