import { ref } from "vue";

const isDrawerOpen = ref(false);

export function useAppConfig() {
  return {
    isDrawerOpen,
  };
}
