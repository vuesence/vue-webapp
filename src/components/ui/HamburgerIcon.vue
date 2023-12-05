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
  color: black;
  // background-color: white;
  width: 34px;
  height: 34px;
  cursor: pointer;
  padding: 5px;
  border: 0px;
  background-color: transparent;
  .burger {
    display: block;
    // outline: 0px solid transparent;
    transition: all .3s ease;
    position: relative;
    width: 24px;
    height: 2px;
    background-color: black;
    &:before, &:after {
      width: 24px;
      height: 2px;
      transition: all .3s ease;
      background-color: black;
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
