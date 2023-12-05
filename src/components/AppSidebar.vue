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
        <router-link v-slot="{ navigate }" :to="{ name: link.name }" custom @click="closeDrawer">
          <span role="link" @click="navigate" @keypress.enter="navigate">{{ link.label }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  min-width: 280px;
  .notebook & {
    min-width: 230px;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      line-height: 3em;
      border-bottom: solid 1px rgb(200, 200, 200);
      span {
        cursor: pointer;
        display: block;
        margin: 0 2em;
        color: #888;
        &:hover {
          color: #444;
        }
      }
    }
  }
}
</style>
