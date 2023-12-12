import type { IHtmlInjectionConfig } from "vite-plugin-html-injection";

export const htmlInjectionConfig: IHtmlInjectionConfig = {
  injections: [
    {
      name: "Open Graph",
      path: "./src/utils/injections/open-graph.html",
      type: "raw",
      injectTo: "head",
    },
    // {
    //   name: "Version checker",
    //   path: "./src/utils/injections/version-checker.js",
    //   type: "js",
    //   injectTo: "head-prepend",
    // },
    {
      name: "Splash screen",
      path: "./src/utils/injections/splash-screen.html",
      type: "raw",
      injectTo: "body-prepend",
    },
    {
      name: "Service worker",
      path: "./src/utils/injections/sw.js",
      type: "js",
      injectTo: "head",
    },
    {
      name: "Google analytics",
      path: "./src/utils/injections/gtag.html",
      type: "raw",
      injectTo: "body",
    },
  ],
};
