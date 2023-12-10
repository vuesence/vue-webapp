import type { JsonRpcResponseMessage } from "./jsonrpc";

// import { t } from "@/app/composables/useI18n";
// import { toast } from "@/app/utils/notification";
// import { useAuth } from "@/user-account/composables/useAuth.js";
// import { router } from "@/app/router";

export const notificationInterceptor = {
  process(data: JsonRpcResponseMessage) {
    // const message = data.error?.message || data.result?.message;
    if (data.result?.message) {
      // const msg = data.result.data?.i18n ? t(`messages.${data.result.data?.i18n}`) : data.result.message;
      const msg = data.result.message;
      // toast.info(msg);
      console.log("JSON-RPC message: ", msg);
    }
    if (data.error?.message) {
      // const msg = data.error.data?.i18n ? t(`errors.${data.error.data?.i18n}`) : data.error.message;
      const msg = data.error.message;
      // toast.warn(msg);
      console.log("JSON-RPC error: ", msg, data.error.data);
    }
  },
};

export const authInterceptor = {
  /**
   * Logout user if response returned error code 401
   * We use it in JSON-RPC instead of HTTP 401 response code
   */
  process(data: JsonRpcResponseMessage) {
    if (data.error?.code === 401) {
      // useAuth().logout();
    }
  },
};
