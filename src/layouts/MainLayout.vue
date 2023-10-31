<script setup lang="ts">
import AppContentPane from "@/components/AppContentPane.vue";
import TouchSlideout from "@/components/TouchSlideout.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppSidebar from "@/components/AppSidebar.vue";

// import { useAppConfig } from "@/composables/useAppConfig";

// const { isDrawerOpen } = useAppConfig();

// const drawerStatus = ref(true);
// function toggleDrawer() {
//   // console.log(drawerStatus.value);
//   drawerStatus.value = !drawerStatus.value;
//   // console.log(drawerStatus.value);
// }
</script>

<template>
  <div class="app">
    <AppHeader />

    <div class="main-pane">
      <TouchSlideout>
        <!-- <TouchSlideout v-model="isDrawerOpen"> -->
        <AppSidebar />
        <!-- <AppSidebar @close-drawer="drawerStatus = false" /> -->
      </TouchSlideout>

      <AppContentPane />
    </div>

    <AppFooter />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;
  .main-pane {
    flex-grow: 1;
    z-index: 2;
  }
}
</style>
