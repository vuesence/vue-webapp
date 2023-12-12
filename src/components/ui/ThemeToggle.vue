<script lang="ts" setup>
import { computed, ref } from "vue";
import BaseToggle from "./BaseToggle.vue";
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDarkTheme } = useAppConfig();

function toggleAppearance() {
  isDarkTheme.value = !isDarkTheme.value;
}

const switchTitle = computed(() => {
  return isDarkTheme.value ? "Switch to light theme" : "Switch to dark theme";
});
</script>

<template>
  <BaseToggle
    :title="switchTitle"
    class="toggle"
    :aria-checked="isDarkTheme"
    @click="toggleAppearance"
  >
    <BaseIcon size="10" name="sun" class="sun" fill="white" />
    <BaseIcon size="10" name="moon" class="moon" />
  </BaseToggle>
</template>

<style scoped>
.sun, .dark .moon {
  opacity: 1;
}
.moon, .dark .sun {
  opacity: 0;
}
.dark .toggle :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>
