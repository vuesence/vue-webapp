import { ref, watch } from "vue";

const isDrawerOpen = ref(false);
const isDarkTheme = ref(false);
const APPEARANCE_KEY = "vwa-theme-appearance";

watch(isDarkTheme, () => {
  if (isDarkTheme.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem(APPEARANCE_KEY, "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem(APPEARANCE_KEY, "");
  }
});

export function initAppearance() {
  // document.documentElement.classList.add("dark");
  const preference = localStorage.getItem(APPEARANCE_KEY) || "";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (!preference || preference === "auto" ? prefersDark : preference === "dark") {
    document.documentElement.classList.add("dark");
  };
}

export function useAppConfig() {
  function closeDrawer() {
    isDrawerOpen.value = false;
  }

  return {
    isDrawerOpen,
    isDarkTheme,
    closeDrawer,
    initAppearance,
  };
}
