<script setup lang="ts">
import AppLayout from "./layouts/MainLayout.vue";
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
  <AppLayout />
</template>

<style lang="scss">
</style>
