import { ref } from "vue";

const isDrawerOpen = ref(false);

export function useAppConfig() {
  function closeDrawer() {
    isDrawerOpen.value = false;
  }

  return {
    isDrawerOpen,
    closeDrawer,
  };
}
