<script setup lang="ts">
const isDrawerOpen = defineModel<boolean>();
</script>

<template>
  <aside class="navigation-drawer" :class="{ open: isDrawerOpen }">
    <slot />
  </aside>
  <div
    class="overlay"
    :class="{ hidden: !isDrawerOpen }"
  />
  <!-- :style="{ opacity: overlayOpacity }" -->
</template>

<style scoped lang="scss">
.navigation-drawer {
  z-index: 9999;
  position: fixed;
  // top: 0;
  left: 0;
  height: 100%;
  // min-height: 500px;
  // min-width: 270px;
  translate: -300px 0;
  transition: translate 0.2s ease;
  // background-color: #eee;
  // background-color: white;
  background-color: var(--vwa-c-bg);
  // border-bottom: var(--vwa-c-border) 1px solid;
  border-right: 1px solid var(--vwa-c-divider);
  .notebook &,
  .desktop & {
    position: initial;
    translate: 0;
  }
  .mobile &.open, .tablet &.open {
    translate: 0 0;
    transition: all 0.4s ease;
  }
}
.overlay {
  background: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  // top: 0;
  left: 0;
  opacity: 0;
  will-change: opacity;
  transition-property: opacity;
  transition-timing-function: ease;
  z-index: 999;
  &.hidden {
    z-index: -999;
  }
  .notebook &,
  .desktop & {
    display: none;
  }
}
</style>
