import { createApp } from "vue";

// import "./assets/scss/style.scss";
import App from "./App.vue";

import { router } from "./router";

const app = createApp(App);
app.use(router);

await Promise.all([
  router.isReady(),
]);

app.mount("#app");
