<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  thresholdHide: Number,
  thresholdOpen: Number,
});

const scrollY = ref(0);

const median = computed(() => {
  return (props.thresholdHide + props.thresholdOpen) / 2;
});

function onScroll() {
  scrollY.value = window.scrollY;
}
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="header"
    :class="{
      'first-header': scrollY < median,
      'second-header': scrollY >= median,
      'hidden': scrollY > thresholdHide && scrollY < thresholdOpen,
    }"
  >
    <slot v-if="scrollY < median" name="first-header"></slot>
    <slot v-else name="second-header"></slot>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  z-index: 3;
  background-color: var(--vwa-c-bg-alt);
  top: 0;
  transition: 0.3s;

  &.first-header {
    background-color: var(--vwa-c-bg-alt);
    height: 60px;
  }

  &.second-header {
    background-color: var(--vwa-c-bg-soft);
    opacity: 0.8;
    height: 100px;
    // just for the demo
    :deep(.header) {
      background-color: var(--vwa-c-bg-alt) !important;
    }
  }

  &.hidden {
    top: -100px;
  }
}
</style>
