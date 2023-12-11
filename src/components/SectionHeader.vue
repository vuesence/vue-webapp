<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="section-header-container">
    <div class="section-header">
      <h1>
        <span>{{ props.subtitle }}</span>
      </h1>
      <h2>{{ props.title }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @import "@/assets/scss/variables.scss";
.section-header-container {
  min-height: 100px;
  position: relative;
  // transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  width: 100%;
  display: block;
  // padding-top: 3em;
  // padding-bottom: 3em;
  &:nth-child(n + 2) {
    margin-top: 5em;
  }
  .section-header {
    padding-bottom: 10px;
    width: 100%;
    // transition: all 1s ease-in;
    white-space: nowrap;
    display: flex;
    flex: 0 1 auto;
    .mobile &,
    .tablet & {
      flex-direction: column;
      align-items: start;
    }
    h1 {
      font-size: 17px;
      color: #b2c5c9;
      letter-spacing: 2px;
      text-transform: uppercase;
      display: inline-block;
      display: inline-flex;
      align-items: center;
      .notebook & {
        font-size: 16px;
      }
      .mobile &,
      .tablet & {
        width: 100%;
        font-size: 14px;
      }
      span {
        display: inline-block;
        padding-right: 1em;
        white-space: nowrap;
      }
      &:after {
        content: "";
        height: 1px;
        background-color: #b2c5c9;
        width: 100%;
        z-index: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-right: 1em;
        min-width: 100px;
      }
    }
    h2 {
      font-family: $headerFont;
      // font-weight: 500;
      color: #555;
      font-size: 36px;
      color: #2a2a2a;
      .notebook & {
        font-size: 32px;
      }
      .mobile &,
      .tablet & {
        font-size: 28px;
        margin-top: 6px;
      }
    }
  }
}
</style>
