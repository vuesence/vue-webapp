import { createApp } from "vue";

// import "./assets/styles/vars.css";
// import "./styles/base.css";

import "./assets/styles/base.scss";
import "./assets/styles/custom.scss";
import App from "./App.vue";
import { router } from "./router";
import { loadIcons } from "@/utils/icons";
import { initAppearance } from "@/composables/useAppConfig";
import { api } from "@/services/api";

const app = createApp(App);
app.use(router);
loadIcons();
initAppearance();
api.init();

await Promise.all([
  router.isReady(),
]);

app.mount("#app");
