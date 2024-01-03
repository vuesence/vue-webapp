import { type Ref, ref } from "vue";
import enLocale from "@/utils/locales/en.json";
import esLocale from "@/utils/locales/es.json";

interface Locale {
  code: string
  name: string
  flag?: string
}

const locales: Locale[] = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "es",
    name: "Español",
  },
];

const locale: Ref<Locale> = ref(locales[0]);
const messages: Record<string, object> = {
  en: enLocale,
  es: esLocale,
};

export const t = useI18n().t;

export function useI18n() {
  async function initI18n() {
    const code
      = localStorage.getItem("vue-webapp_lang")
      || import.meta.env.VITE_APP_DEFAULT_LOCALE
      || "en";
      // || window.navigator.language.substring(0, 2);
    setLocale(code);
  }

  // It can load locales from remote server
  async function setLocale(code: string) {
    if (locale.value.code !== code) {
      locale.value = locales.find(l => l.code === code);
      localStorage.setItem("vue-webapp_lang", locale.value.code);
    }
  }

  function t(msg: string, params: Record<string, string> = null) {
    if (!msg || !locale.value) {
      return "";
    }

    let val
      = msg.split(".").reduce((val, part) => {
        return val[part] ?? null;
      }, messages[locale.value.code]) ?? msg;
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        val = val.replace(`{${key}}`, value);
      }
    }
    return val ?? msg;
  }

  return {
    t,
    locale,
    locales,
    setLocale,
    initI18n,
  };
}
