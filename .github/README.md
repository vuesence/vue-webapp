# Vue 3 webapp builder

###

Full documentation is available at [https://vue-faq.org/en/vue-webapp/](https://vue-faq.org/en/vue-webapp/)

## Short description

Vue 3 webapp builder allows to scaffold a web application, with the ability to choose a business template (portfolio, blog, store, etc.), website layout, design and functional elements (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further customization and content filling.

```sh
$ pnpm create vue-webapp


✔ Project name: ... my-vue-project
✔ Make it PWA ( adds service worker and manifest )? ... yes
✔ Add Github Action Workflow for publishing it on GitHub Pages? ... no
✔ Select navigation drawer ' TouchSlideoutDrawer
✔ Select webapp footer ' RichFooter
✔ Add 'BaseIcon' component? ... yes
...

Scaffolding project in /home/ubuntu/my-vue-project... 

$ cd my-vue-project
$ pnpm i
$ pnpm dev
```

Result in a browser:

![](webapp-start.png)

## Reasons 

There are quite a few (mostly specific and quickly deprecated) boilerplates for creating a Vue application. Usually by these they mean creating an empty project with specific libraries. In other words, it's just setting up an environment to start development without, directly, code.

At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.

As a result, one may get the impression that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some add-on or other solution - Nuxt, Vue Storefront, Astro, VitePress - which explicitly position themselves as a tool for solving certain (or a wide range of) business tasks.

The idea for a tool similar to `create-vue`, scaffolding a Vue 3 webapp, came up. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose dependencies unwanted by an experienced developer and create a skeleton of established best practices for further development of the application.

Clearly, defining one or another "best practice" (fetch or axios?) can be quite a moot point, but still.
