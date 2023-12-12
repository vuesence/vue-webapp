<script setup lang="ts">
</script>

<template>
  <main class="content-pane">
    <Transition>
      <router-view />
    </Transition>

    <div class="content">
    </div>
  </main>
</template>

<style lang="scss" scoped>
.content-pane {
  padding: 1em 2em;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
