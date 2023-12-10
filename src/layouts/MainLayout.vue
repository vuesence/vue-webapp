<script setup lang="ts">
import AppContentPane from "@/components/AppContentPane.vue";
import AppNavigationDrawer from "@/components/drawers/SimpleDrawer.vue";

// import AppNavigationDrawer from "@/components/drawers/TouchSlideoutDrawer.vue";

import AppSidebar from "@/components/navbars/SimpleNavbar.vue";

// import AppSidebar from "@/components/navbars/MantineSimpleNavbar.vue";

// import AppHeader from "@/components/headers/MantineSimpleHeader.vue";

// import AppHeader from "@/components/headers/MantineLayeredHeader.vue";
import AppHeader from "@/components/headers/SimpleHeader.vue";

// import AppFooter from "@/components/footers/RichFooter.vue";
// import AppFooter from "@/components/footers/DistributedFooter.vue";
// import AppFooter from "@/components/footers/MantineSimpleFooter.vue";

// import AppFooter from "@/components/footers/MantineRichFooter.vue";

import AppFooter from "@/components/footers/SimpleFooter.vue";

import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <div class="app">
    <AppHeader />

    <div class="main-pane">
      <AppNavigationDrawer v-model="isDrawerOpen">
        <AppSidebar />
      </AppNavigationDrawer>

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
    display: flex;
    z-index: 2;
  }
}
</style>
