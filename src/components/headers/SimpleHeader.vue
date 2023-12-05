<script setup lang="ts">
import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <header class="header">
    <HamburgerIcon v-model="isDrawerOpen" class="drawer-toggle" />
    <div class="title">
      Acme Corporation
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  height: 2em;
  padding: 15px 20px;
  background-color: #eee;
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
