<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <header class="header">
    <BaseIcon
      name="hamburger"
      class="drawer-toggle"
      fill="currenColor"
      @click="isDrawerOpen = !isDrawerOpen"
    />
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
    cursor: pointer;
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
