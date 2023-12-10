<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
import { useScreenWidth } from "@/composables/useScreenWidth";
import { useSplashScreen } from "@/composables/useSplashScreen";

useScreenWidth({
  mobile: 480,
  tablet: 767,
  notebook: 1199,
  desktop: 10000,
});

useSplashScreen();
</script>

<template>
  <MainLayout />
</template>

<style lang="scss">
</style>
