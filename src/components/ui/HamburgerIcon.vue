<script setup>
const modelValue = defineModel();
</script>

<template>
  <button :class="{ opened: modelValue }" @click="modelValue = !modelValue">
    <div class="burger" />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  padding: 5px;
  border: 0px;
  background-color: transparent;
  .burger {
    display: block;
    // outline: 0px solid transparent;
    transition: all .3s ease;
    position: relative;
    width: 1.7rem;
    height: 2px;
    background-color: var(--vwa-c-text-1);
    &:before, &:after {
      width: 1.7rem;
      height: 2px;
      transition: all .3s ease;
      background-color: var(--vwa-c-text-1);
      content: "";
      left: 0;
      position: absolute;
      display: block;
    }
    &:before {
      top: -8px;
    }
    &:after {
      top: 8px;
    }
  }
  &.opened .burger {
      background-color: transparent;
      &:before {
        transform: translateY(.5rem) rotate(45deg);
      }
      &:after {
        transform: translateY(-.5rem) rotate(-45deg);
      }
    }
}
</style>
