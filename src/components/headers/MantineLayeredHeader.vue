<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
import HamburgerIcon from "@/components/ui/HamburgerIcon.vue";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();

const links = [
  { title: "Book a demo", route: { name: "contacts" } },
  { title: "Documentation", route: { name: "about" } },
  { title: "Community", route: { name: "about" } },
  { title: "Academy", route: { name: "about" } },
  { title: "Forums", route: { name: "about" } },
];

const sublinks = [
  { title: "Privacy & Security", route: { name: "contacts" } },
  { title: "Account settings", route: { name: "about" } },
  { title: "Support options", route: { name: "about" } },
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
    <div class="right-panel">
      <div class="links-wrapper">
        <div class="sublinks">
          <RouterLink v-for="link in sublinks" :key="link.title" class="link" :to="link.route">
            {{ link.title }}
          </RouterLink>
        </div>
        <div class="links">
          <RouterLink
            v-for="link in links"
            :key="link.title"
            class="link"
            :class="{ active: link.title === 'Documentation' }"
            :to="link.route"
          >
            {{ link.title }}
          </RouterLink>
        </div>
      </div>
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
  height: 6em;
  padding: 0 20px 0;
  background-color: var(--vwa-c-bg);
  z-index: 3;
  justify-content: space-between;
  border-bottom: 1px solid var(--vwa-c-border);

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
      color: var(--vwa-c-text-1);
    }
  }

  .drawer-toggle {
    .notebook &,
    .desktop & {
      display: none;
    }
  }
  .right-panel {
    display: flex;
    align-items: center;
    align-self: flex-end;

    .links-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-transform: uppercase;
      align-self: flex-end;
      margin-bottom: -1px;

      .mobile &,
      .tablet & {
        display: none;
      }

      .sublinks {
        display: flex;
        margin-bottom: 7px;

        .link {
          font-size: 0.7em;
          font-weight: 300;
          display: block;
          line-height: 1;
          padding: 8px 12px;
          border-radius: 4px;
          text-decoration: none;
          color: var(--vwa-c-text-3);

          &:hover {
            color: var(--vwa-c-text-1)
          }
        }
      }
    }
  }

  .links {
    display: flex;

    .link {
      font-size: 0.8em;
      font-weight: 600;
      display: block;
      line-height: 1;
      padding: 8px 12px;
      // border-radius: 4px;
      text-decoration: none;
      color: var(--vwa-c-text-2);

      &:hover {
        color: var(--vwa-c-text-1);
      }

      &.active {
        color: var(--vwa-c-text-1);
        border-bottom: 2px solid var(--vwa-c-brand-1);
      }
    }
  }
}
</style>
