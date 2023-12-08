<script setup>
import { computed } from "vue";
import { getImageUrl, getSvgIcon } from "@/utils/icons";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "24",
  },
  color: {
    type: String,
    default: "currentColor",
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "auto",
  },
  fill: {
    type: String,
    default: "none",
  },
  type: {
    type: String,
    default: "svg",
  },
});

const width = computed(() => {
  return props.size ? `${props.size}px` : `${props.width}px`;
});
const height = computed(() => {
  return props.size ? `${props.size}px` : `${props.height}px`;
});
</script>

<template>
  <div
    v-if="getSvgIcon(props.name)"
    class="base-icon"
    :data-name="props.name"
    :fill1="props.fill ?? 'currentColor'"
    stroke="currentColor"
    :style="{
      width,
      height,
      color: props.color,
    }"
    v-html="getSvgIcon(props.name)"
  />
  <img
    v-else
    :src="getImageUrl(props.name)"
    :data-name="props.name"
    :style="{
      width,
      height,
      minWidth: width,
      minHeight: height,
    }"
  >
</template>

<style lang="scss" scoped>
:deep(svg) {
  width: 100%;
  height: 100%;

  path {
    // fill: currentColor;
    stroke: currentColor;
    stroke-width: 1.5;
    fill: v-bind('props.fill');
    // fill: v-bind('props.fill ?? "currentColor"');
  }
}
</style>
