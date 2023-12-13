<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();

const links = [
  { title: "Features", route: { name: "contacts" } },
  { title: "Pricing", route: { name: "about" } },
  { title: "Learn", route: { name: "about" } },
  { title: "Community", route: { name: "about" } },
];
</script>

<template>
  <header class="header">
    <RouterLink :to="{ name: 'home' }">
      <div class="logo">
        <BaseIcon size="30" name="logo" class="icon" />
        <div class="title">
          Acme Inc.
        </div>
      </div>
    </RouterLink>
    <div class="links">
      <RouterLink v-for="link in links" :key="link.title" class="link" :to="link.route">
        {{ link.title }}
      </RouterLink>
      <ThemeToggle />
    </div>
    <HamburgerIcon v-model="isDrawerOpen" class="drawer-toggle" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  height: 4em;
  padding: 15px 20px;
  background-color: var(--vwa-c-bg);
  z-index: 3;
  justify-content: space-between;
  border-bottom: 1px solid var(--vwa-c-divider);
  // margin-bottom: 1em;
  .logo {
    // height: 1.75rem;
    // color: rgb(0, 0, 0);
    max-width: 200px;
    display: flex;
    align-items: center;
    .title {
      margin-left: 0.6rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--vwa-c-text-1)
    }
  }
  .drawer-toggle {
    .notebook &, .desktop & {
      display: none;
    }
  }
  .links {
    .mobile &, .tablet & {
      display: none;
    }
    display: flex;
    align-items: center;
    .link {
      font-size: 0.9em;
      font-weight: 500;
      display: block;
      line-height: 1;
      padding: 8px 12px;
      border-radius: 4px;
      text-decoration: none;
      color: var(--vwa-c-text-2);
      &:hover {
        background-color: var(--vwa-c-bg-soft);
      }
    }
  }
}
</style>
