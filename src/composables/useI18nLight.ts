import { type Ref, ref } from "vue";
import { api } from "@/services";

// import { createI18n } from "vue-i18n";

interface Locale {
  code: string
  name: string
  flag: string
}

const locales: Locale[] = [
  {
    code: "en",
    name: "English",
    flag: "england",
  },
  {
    code: "sp",
    name: "Español",
    flag: "spain",
  },
];
// export const i18n = createI18n({
//   I18nScope: "global",
//   globalInjection: true,
//   legacy: false,
//   allowComposition: true,
//   fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
//   formatFallbackMessages: true,
//   // messages: { en: messages }
// });

const locale: Ref<Locale> = ref();
// export const t = i18n.global.t;
export const t = useI18n().t;
let messages;
// useI18n().initI18n();

export function useI18n() {
  async function initI18n() {
    messages = [];
    const osLang = window.navigator.language.substring(0, 2);
    // const osLang = "tr";
    const lang
      = localStorage.getItem(`${import.meta.env.VITE_APP_NAME}_lang`)
      ?? (import.meta.env.VITE_APP_DEFAULT_LOCALE || osLang);
    await loadLanguage(lang);
  }

  async function loadLanguage(lang) {
    if (locale.value !== lang) {
      // Get lang from the server
      const localeMessages = await api.utils.downloadLanguage(lang);
      messages[lang] = localeMessages[lang];
      console.log("Setting locale:", lang);
      locale.value = locales.find(l => l.code === lang);
      localStorage.setItem(`${import.meta.env.VITE_APP_NAME}_lang`, lang);
    }
  }

  function t(msg, params = null) {
    if (!msg || !locale.value) {
      return "";
    }

    let val
      = msg.split(".").reduce((val, part) => {
        // console.log(part);
        // console.log(val[part]);
        // console.log(val);
        return val[part] ?? null;
      }, messages[locale.value.code]) ?? msg;
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        // console.log(`${key}: ${value}`);
        val = val.replace(`{${key}}`, value);
      }
      // val = val.replace("{0}", params);
    }
    // console.log(val);
    // console.log(msg);
    return val ?? msg;
  }

  return {
    t,
    // i18n,
    locale,
    locales,
    initI18n,
    loadLanguage,
  };
}
