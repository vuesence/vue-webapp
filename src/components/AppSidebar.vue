<script setup lang="ts">
import { useAppConfig } from "@/composables/useAppConfig";

// const emit = defineEmits(["closeDrawer"]);

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }" @click="isDrawerOpen = false">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">
          About
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contacts' }">
          Contacts
        </router-link>
      </li>
    <!-- <li><a href="#">navbar</a></li> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
</style>
