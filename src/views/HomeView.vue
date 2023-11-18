<script setup lang="ts">
interface IOption {
  name: string
  value: string
}

const options: IOption[] = [];
</script>

<template>
  <div>
    <h3>Congratulations with scaffolding your vue webapp!</h3>
    <p v-if="options.length">
      Selected options:
    </p>
    <ul>
      <li
        v-for="option in options"
        :key="option.name"
      >
        {{ `${option.name}: ${option.value}` }}
      </li>
    </ul>
  </div>
</template>
