<script setup lang="ts">
import { useAppConfig } from "@/composables/useAppConfig";

const { closeDrawer } = useAppConfig();

const links = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "contacts", label: "Contacts" },
];
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.label">
        <router-link :to="{ name: 'home' }" @click="closeDrawer">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
