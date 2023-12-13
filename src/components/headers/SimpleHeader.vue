<script setup lang="ts">
import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <header class="header">
    <HamburgerIcon v-model="isDrawerOpen" class="drawer-toggle" />
    <div class="title">
      Acme Corporation
    </div>
    <ThemeToggle />
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  height: 4em;
  padding: 15px 20px;
  background-color: var(--vwa-c-bg);
  z-index: 3;
  .drawer-toggle {
    .notebook &, .desktop & {
      display: none;
    }
  }
  .title {
    font-size: 1.5em;
    margin-left: 1em;
  }
}
</style>
