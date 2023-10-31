<script setup lang="ts">
</script>

<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">
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
</template>

<style lang="scss" scoped>
</style>
