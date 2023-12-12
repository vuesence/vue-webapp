<script setup lang="ts">
import { onMounted, ref } from "vue";

interface IOption {
  name: string
  value: string
}

// api-placeholder

const options: IOption[] = [];
</script>

<template>
  <div>
    <h2>Congratulations with scaffolding your vue webapp!</h2>
    <h3 v-if="options.length">
      Selected options:
    </h3>
    <ul>
      <li
        v-for="option in options"
        :key="option.name"
        :class="{ dimmed: option.value === 'false' }"
      >
        <span class="name">{{ option.name }}</span>
        <span class="value">{{ option.value }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 2em;
  li {
    padding: .4rem;
    display: flex;
    &:nth-child(even) {
      background-color: var(--vp-c-bg-alt);
    }
    &.dimmed {
      opacity: 0.5;
    }
    span {
      width: 50%;
    }
  }
}
</style>
