<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { closeDrawer } = useAppConfig();

function onLinkClick(event, navigate) {
  closeDrawer();
  navigate(event);
}

const links = [
  { name: "home", label: "Home", icon: "home" },
  { name: "about", label: "About", icon: "about" },
  { name: "contacts", label: "Contact us", icon: "contact-us" },
];
const footerLinks = [
  { name: "home", label: "Change account", icon: "change-account" },
  { name: "home", label: "Logout", icon: "logout" },
];
</script>

<template>
  <nav class="navbar">
    <div class="main">
      <ul>
        <li v-for="link in links" :key="link.label">
          <router-link v-slot="{ href, navigate }" :to="{ name: link.name }" custom>
            <BaseIcon size="24" :name="link.icon" class="icon" fill1="currentColor" />
            <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.label }}</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="footer">
      <ul>
        <li v-for="link in footerLinks" :key="link.label">
          <router-link v-slot="{ href, navigate }" :to="{ name: link.name }" custom>
            <BaseIcon size="24" :name="link.icon" class="icon" />
            <a role="link" :href="href" @click="onLinkClick($event, navigate)">{{ link.label }}</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  min-width: 220px;
  padding: 1em;

  .notebook & {
    min-width: 220px;
  }

  .main, .footer {
    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        line-height: 3em;
        padding-left: 1em;
        display: flex;
        align-items: center;
        color: var(--vp-c-text-2);
        // border-bottom: solid 1px var(--vp-c-divider);
        &:hover {
          color: var(--vp-c-text-1);
          background-color: var(--vp-c-bg-alt);
        }

        a {
          cursor: pointer;
          display: block;
          padding: 0 2em 0 1em;
          color: #888;
          text-wrap: nowrap;
        }
        // .icon {
        //   color: #444;
        // }
      }

    }
  }
  .main {
    padding-bottom: 2em;
  }
  .footer {
    // padding-top: 1em;
    margin-top: 1em;
    border-top: 1px solid var(--vp-c-divider);

  }
}
</style>
