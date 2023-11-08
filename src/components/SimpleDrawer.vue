<script setup lang="ts">
const isDrawerOpen = defineModel<boolean>();
</script>

<template>
  <aside class="simple-drawer" :class="{ open: isDrawerOpen }">
    <slot />
  </aside>
  <div
    class="overlay"
    :class="{ hidden: !isDrawerOpen }"
  />
  <!-- :style="{ opacity: overlayOpacity }" -->
</template>

<style scoped lang="scss">
.simple-drawer {
  z-index: 9999;
  position: fixed;
  // top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  translate: -300px 0;
  transition: all 0.2s ease;
  background-color: #eee;
  .notebook &,
  .desktop & {
    position: initial;
  }
  &.open {
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
