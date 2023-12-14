<script setup lang="ts">
import { useAppConfig } from "@/composables/useAppConfig";

defineEmits(["click"]);
const { closeDrawer } = useAppConfig();

function onLinkClick(event, navigate) {
  closeDrawer();
  navigate(event);
}

const links = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "contacts", label: "Contact us" },
];
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.label">
        <router-link v-slot="{ href, navigate }" :to="{ name: link.name }" custom>
          <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.label }}</a>
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
      border-bottom: 1px solid var(--vwa-c-divider);
      a {
        cursor: pointer;
        display: block;
        padding: 0 2em;
        color: var(--vwa-c-text-2);
        &:hover {
          color: var(--vwa-c-text-1);
        }
      }
    }
  }
}
</style>
