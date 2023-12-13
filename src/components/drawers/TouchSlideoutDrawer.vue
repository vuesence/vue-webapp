<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useTouchSwipe } from "@/composables/useTouchSwipe";

// import { useAppConfig } from "@/composables/useAppConfig";

// const { isDrawerOpen } = useAppConfig();

const isDrawerOpen = defineModel<boolean>();

console.log("setup - isDrawerOpen", isDrawerOpen.value);

const { coordsStart, coordsEnd, stop } = useTouchSwipe(document.body, {
  onSwipe,
  onSwipeEnd,
  onSwipeStart,
});

watch(isDrawerOpen, () => {
  console.log("isDrawerOpen", isDrawerOpen.value);
  if (isDrawerOpen.value) {
    open();
  } else {
    close();
  }
});

// watch((isDrawerOpen) => {
//   console.log("isDrawerOpen", isDrawerOpen.value);
// });

const touchSlideout = ref();
const touchSlideoutWrapper = ref();
const overlay = ref();
const viewportWidth = ref(window.innerWidth);

// let viewportWidth = window.innerWidth;

// let drawerElement;
// touchSlideout.value = document.getElementById("tss");
let touchSlideoutWidth;
// let touchMoveStart;
let touchSlideoutStartLeft;

const config = {
  activeTouchAreaWidth: 1, // px
  transitionDuration: 0.2, // sec
  maxOverlayOpacity: 0.8,
  changeStateTrigger: 100, // px
  windowMaxWidth: 1024, // px
  maxDrawerWidthPortion: 0.8,
  maxDrawerWidth: 300,
};

const maxDrawerWidth = computed(() => {
  return Math.min(config.maxDrawerWidth, viewportWidth.value * config.maxDrawerWidthPortion);
});

function initStyles() {
  console.log("initStyles");

  viewportWidth.value = window.innerWidth;
  // touchSlideoutWidth = maxDrawerWidth.value + config.activeTouchAreaWidth;
  touchSlideoutWidth = maxDrawerWidth.value;
  touchSlideoutWrapper.value.style.width = `${maxDrawerWidth.value}px`;
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  overlay.value.style.transitionDuration = `${config.transitionDuration}s`;
  touchSlideout.value.style.transform = `translateX(${-maxDrawerWidth.value}px)`;
  touchSlideout.value.style.width = `${touchSlideoutWidth}px`;
  // -------------------------------
  touchSlideout.value.style.transitionDuration = "0s";
  overlay.value.style.transitionDuration = "0s";
  console.log("closing");

  // close();
}

function overlayClick(event) {
  const x = touchSlideout.value.getBoundingClientRect().left;
  if (!isDrawerOpen.value && x < -100) {
    return;
  }

  event.stopPropagation();
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  console.log("x", x);
  console.log("event.clientX", event.clientX);
  console.log("maxDrawerWidth.value", maxDrawerWidth.value);
  if (event.clientX > x + maxDrawerWidth.value) {
    // close();
    isDrawerOpen.value = false;
  }
}

function open() {
  overlay.value.style.transitionDuration = `${config.transitionDuration}s`;
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  overlay.value.style.display = "initial";
  overlay.value.style.opacity = config.maxOverlayOpacity;
  touchSlideout.value.style.width = `${maxDrawerWidth.value}px`;
  // touchSlideout.value.style.width = `${viewportWidth.value}px`;
  touchSlideout.value.style.transform = "translateX(0px)";
  // isDrawerOpen.value = true;
}
function close() {
  // debugger;
  overlay.value.style.opacity = 0;
  touchSlideout.value.style.width = `${touchSlideoutWidth}px`;
  touchSlideout.value.style.transform = `translateX(${-maxDrawerWidth.value}px)`;
  setTimeout(() => {
    overlay.value.style.display = "none";
  }, 500);

  // isDrawerOpen.value = false;
}

function onSwipe(event) {
  if (!isDrawerOpen.value && coordsStart.x > 100) {
    return;
  }

  const touchMovePosition = event.changedTouches[0].clientX;
  let touchSlideoutCurrentLeft = touchSlideoutStartLeft + (touchMovePosition - coordsStart.x);

  if (touchSlideoutCurrentLeft <= 0) {
    // swipe touchmove < maxDrawerWidth
    if (coordsStart.x > maxDrawerWidth.value) {
      // if isDrawerOpened and touchstart over elSub
      touchSlideoutCurrentLeft = touchSlideoutCurrentLeft + (coordsStart.x - maxDrawerWidth.value);
    }
    if (touchMovePosition <= maxDrawerWidth.value) {
      touchSlideout.value.style.transform = `translateX(${touchSlideoutCurrentLeft}px)`;
    }

    const overlayOpacity = touchMovePosition / maxDrawerWidth.value;
    if (overlayOpacity > 0.05) {
      overlay.value.style.display = "initial";
    }

    if (overlayOpacity > 0 && overlayOpacity < 1) {
      overlay.value.style.opacity = Math.min(overlayOpacity, config.maxOverlayOpacity);
    }
    // console.log("overlayOpacity", overlay.value.style.opacity);
  }
}
function onSwipeStart() {
  if (!isDrawerOpen.value && coordsStart.x > 100) {
    return;
  }

  touchSlideout.value.style.transitionDuration = "0s";
  overlay.value.style.transitionDuration = "0s";
  // overlay.value.style.zIndex = 999;
  touchSlideoutStartLeft = touchSlideout.value.getBoundingClientRect().left;
  // touchMoveStart = coordsStart.x;
}
function onSwipeEnd(e, direction) {
  if (!isDrawerOpen.value && coordsStart.x > 100) {
    return;
  }

  overlay.value.style.transitionDuration = `${config.transitionDuration}s`;
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  if (direction === "right") {
    if (!isDrawerOpen.value) {
      if (coordsEnd.x - coordsStart.x > config.changeStateTrigger) {
        isDrawerOpen.value = true;
        open();
      } else {
        isDrawerOpen.value = false;
        close();
      }
    }
  } else if (direction === "left") {
    if (isDrawerOpen.value && coordsEnd.x <= maxDrawerWidth.value) {
      if (
        (coordsStart.x > maxDrawerWidth.value
        && coordsEnd.x < maxDrawerWidth.value - config.changeStateTrigger)
        || (coordsStart.x < maxDrawerWidth.value && coordsStart.x - coordsEnd.x > config.changeStateTrigger)
      ) {
        isDrawerOpen.value = false;
        close();
      } else {
        isDrawerOpen.value = true;
        open();
      }
    }
  } else {
    // close();
    isDrawerOpen.value = false;
  }
}

onMounted(() => {
  // the drawer is sliding only for width < config.windowMaxWidth
  if (viewportWidth.value < config.windowMaxWidth) {
    initStyles();
    window.addEventListener("resize", initStyles, false);
    overlay.value.addEventListener("click", overlayClick, false);
  }
});

onUnmounted(() => {
  stop();
  window.removeEventListener("resize", initStyles, false);
  overlay.value.removeEventListener("click", overlayClick, false);
});
</script>

<template>
  <aside ref="touchSlideout" class="navigation-drawer" :class="{ open: isDrawerOpen }">
    <div ref="touchSlideoutWrapper" class="touch-slideout-wrapper">
      <div class="touch-slideout-drawer">
        <slot :close-drawer="close" />
      </div>
    </div>
  </aside>
  <div
    ref="overlay"
    class="overlay"
    :class="{ hidden: !isDrawerOpen }"
  />
</template>

<style scoped lang="scss">
.navigation-drawer {
  z-index: 9999;
  position: fixed;
  // top: 0;
  left: 0;
  height: 100%;
  will-change: transform;
  transition-property: transform;
  transition-timing-function: ease;
  background-color: var(--vwa-c-bg);
  .notebook &,
  .desktop & {
    position: initial;
    transform: none !important;
  }
  .touch-slideout-wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--vwa-c-bg-alt);
    .notebook &,
    .desktop & {
      position: initial;
      // background-color: white;
      background-color: var(--vwa-sidebar-bg-color);
    }
    .touch-slideout-drawer {
      display: block;
      overflow-y: overlay;
      height: 100%;
      width: 100%;
      // background: hsl(2, 57%, 40%);
    }
  }
}
.overlay {
  background: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  // top: 0;
  left: 0;
  opacity: 0;
  will-change: opacity;
  transition-property: opacity;
  transition-timing-function: ease;
  z-index: 999;
  &.hidden {
    z-index: -999;
  }
  .notebook &,
  .desktop & {
    display: none;
  }
}
</style>
