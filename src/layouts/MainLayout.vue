<script setup lang="ts">
import { ref } from "vue";
import TouchSlideout from "@/components/TouchSlideout.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import { useSwipe } from "@/composables/useSwipe";

const {
  isSwiping,
  direction,
  coordsStart,
  coordsEnd,
} = useSwipe(
  document.body,
  {},
);

const drawerStatus = ref(true);
function toggleDrawer() {
  console.log(drawerStatus.value);
  drawerStatus.value = !drawerStatus.value;
  console.log(drawerStatus.value);
}
</script>

<template>
  <AppHeader />

  <TouchSlideout v-model="drawerStatus">
    <AppSidebar />
  </TouchSlideout>

  <router-view />

  <div class="content">
    <!-- <button @click="drawerStatus = !drawerStatus"> -->
    <button @click="toggleDrawer">
      OPEN MENU
    </button>
    <h3>isSwiping: {{ isSwiping }}</h3>
    <h3>direction: {{ direction }}</h3>
    <h3>coordsStart: {{ coordsStart }}</h3>
    <h3>coordsEnd: {{ coordsEnd }}</h3>
    <!-- <h3>lengthX: {{ moveX }}</h3> -->
    <!-- <h3>lengthY: {{ moveY }}</h3> -->
  </div>

  <div class="content">
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
  <AppFooter />
</template>

<style lang="scss">
</style>
