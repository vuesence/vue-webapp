<script setup lang="ts">
import { useTouchSwipe } from "@/composables/useTouchSwipe";

const {
  isSwiping,
  direction,
  coordsStart,
  coordsEnd,
} = useTouchSwipe(
  document.body,
  {},
);
</script>

<template>
  <main class="content-pane">
    <router-view />

    <div class="content">
      <!-- <button @click="drawerStatus = !drawerStatus"> -->

      <h3>isSwiping: {{ isSwiping }}</h3>
      <h3>direction: {{ direction }}</h3>
      <h3>coordsStart: {{ coordsStart }}</h3>
      <h3>coordsEnd: {{ coordsEnd }}</h3>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.content-pane {
  padding: 15px 10px;
}
</style>
