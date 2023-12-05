<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";

const linkGroups = [
  {
    title: "About",
    links: [
      { title: "Features", route: { name: "contacts" } },
      { title: "Pricing", route: { name: "about" } },
      { title: "Support", route: { name: "about" } },
      { title: "Forums", route: { name: "about" } },
    ],
  },
  {
    title: "Project",
    links: [
      { title: "Contribute", route: { name: "contacts" } },
      { title: "Media assets", route: { name: "about" } },
      { title: "Changelog", route: { name: "about" } },
      { title: "Releases", route: { name: "about" } },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Join Discord", route: { name: "contacts" } },
      { title: "Follow on Twitter", route: { name: "about" } },
      { title: "Email newsletter", route: { name: "about" } },
    ],
  },

];

const socials = [
  { name: "twitter", url: "https://twitter.com/acme" },
  { name: "youtube", url: "https://youtube.com/acme" },
  { name: "instagram", url: "https://instagram.com/acme" },
];
</script>

<template>
  <footer class="footer">
    <div class="footer-header">
      <div class="logo-wrapper">
        <div class="logo">
          <BaseIcon size="30" name="logo" class="icon" />
          <div class="title">
            Acme Inc.
          </div>
        </div>
        <p class="subtitle">
          Build fully functional accessible web applications faster than ever
        </p>
      </div>
      <div v-for="(linkGroup, index) in linkGroups" :key="index" class="link-groups">
        <div class="links">
          <h4 class="title">
            {{ linkGroup.title }}
          </h4>
          <RouterLink v-for="link in linkGroup.links" :key="link.title" class="link" :to="link.route">
            {{ link.title }}
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="title">
        © 2023 Acme Inc. All rights reserved.
      </p>
      <div class="socials">
        <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
          <button>
            <BaseIcon size="18" :name="social.name" fill="none" />
          </button>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 1em;
  margin-top: 5rem;
  border-top: 1px solid #e9ecef;
  background-color: #f8f9fa;

  .footer-header {
    display: flex;
    justify-content: space-between;

    .logo-wrapper {
      color: rgb(0, 0, 0);
      max-width: 200px;

      .logo {
        // height: 1.75rem;
        color: rgb(0, 0, 0);
        max-width: 200px;
        display: flex;
        align-items: center;

        .title {
          margin-left: 0.6rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #555;
        }
      }

      .subtitle {
        font-size: 0.8em;
      }
    }

    .link-groups {
      display: flex;
      flex-wrap: wrap;

      .links {
        width: 10rem;

        .title {
          margin: 0 0 0.8em;
          font-weight: 700;
        }

        .link {
          display: block;
          appearance: none;
          background-color: rgba(0, 0, 0, 0);
          border: 0px none rgb(134, 142, 150);
          color: #868e96;
          cursor: pointer;
          margin: 5px 0;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-size: 0.8rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #777;

    .title {
      font-size: 0.8em;
    }
  }

  .socials {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px;
    justify-content: flex-end;
    box-sizing: border-box;
    align-items: center;

    button {
      appearance: none;
      background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
      border: 1px solid rgb(206, 212, 218);
      border-radius: 42px;
      color: #777;
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      background-color: rgb(255, 255, 255);
      padding: 7px;
      touch-action: manipulation;
      box-sizing: border-box;

      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
}

@media (max-width: 48em) {
  .footer {
    .footer-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .title {
        text-align: center;
      }

      .link-groups {
        display: none;
      }
    }
  }
}
</style>
