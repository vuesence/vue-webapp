// import auth from "./auth";
import utils from "./utils";
import { authInterceptor, notificationInterceptor } from "./interceptors";
import jsonrpc from "./jsonrpc";
import http from "./http";

// import { useAuth } from "@/user-account/composables/useAuth";

// const auth: any = null;

const api = {
  utils,
  http,
  init() {
    http.setOptions({
      baseUrl: import.meta.env.VITE_API_URL,
      headers: { "Content-Type": "application/json" },
      token: () => null,
      logout: () => null,
    });
    jsonrpc.addResponseInterceptor(notificationInterceptor);
    // jsonrpc.addResponseInterceptor(authInterceptor);
  },
};

export { api };
export default api;
