<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useSwipe } from "@/composables/useSwipe";

const isOpen = defineModel<boolean>();

console.log("isOpen", isOpen.value);

const {
  isSwiping,
  coordsStart,
  coordsEnd,
  stop,
} = useSwipe(
  document.body,
  { onSwipe, onSwipeEnd, onSwipeStart },
);

// watch((isSwiping) => {
//   console.log("isOpen", isOpen.value);
// });

const touchSlideout = ref();
const touchSlideoutWrapper = ref();
const overlay = ref();
// const isOpen = ref(true);
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
  maxDrawerWidth: 400,
};

const maxDrawerWidth = computed(() => {
  return Math.min(
    config.maxDrawerWidth,
    viewportWidth.value * config.maxDrawerWidthPortion,
  );
});

function initStyles() {
  console.log("initStyles");

  viewportWidth.value = window.innerWidth;
  touchSlideoutWidth = maxDrawerWidth.value + config.activeTouchAreaWidth;
  touchSlideoutWrapper.value.style.width = `${maxDrawerWidth.value}px`;
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  overlay.value.style.transitionDuration = `${config.transitionDuration}s`;
  touchSlideout.value.style.transform = `translateX(${-maxDrawerWidth.value}px)`;
  touchSlideout.value.style.width = `${touchSlideoutWidth}px`;
  // -------------------------------
  touchSlideout.value.style.transitionDuration = "0s";
  overlay.value.style.transitionDuration = "0s";
  console.log("closing");

  close();
}

function overlayClick(event) {
  event.stopPropagation();
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  const x = touchSlideout.value.getBoundingClientRect().left;
  if (event.clientX > x + maxDrawerWidth.value) {
    close();
  }
}

function open() {
  overlay.value.style.opacity = config.maxOverlayOpacity;
  touchSlideout.value.style.width = `${viewportWidth.value}px`;
  touchSlideout.value.style.transform = "translateX(0px)";
  isOpen.value = true;
}
function close() {
  overlay.value.style.opacity = 0;
  touchSlideout.value.style.width = `${touchSlideoutWidth}px`;
  touchSlideout.value.style.transform = `translateX(${-maxDrawerWidth.value}px)`;
  isOpen.value = false;
}

function onSwipe(event) {
  const touchMovePosition = event.changedTouches[0].clientX;
  let touchSlideoutCurrentLeft = touchSlideoutStartLeft + (touchMovePosition - coordsStart.x);

  if (touchSlideoutCurrentLeft <= 0) {
    // swipe touchmove < maxDrawerWidth
    if (coordsStart.x > maxDrawerWidth.value) {
      // if isOpened and touchstart over elSub
      touchSlideoutCurrentLeft = touchSlideoutCurrentLeft + (coordsStart.x - maxDrawerWidth.value);
    }
    if (touchMovePosition <= maxDrawerWidth.value) {
      touchSlideout.value.style.transform = `translateX(${touchSlideoutCurrentLeft}px)`;
    }
    const overlayOpacity = touchMovePosition / maxDrawerWidth.value;
    if (overlayOpacity > 0 && overlayOpacity < 1) {
      overlay.value.style.opacity = Math.min(overlayOpacity, config.maxOverlayOpacity);
      // console.log("overlayOpacity", overlay.value.style.opacity);
    }
  }
}
function onSwipeStart() {
  touchSlideout.value.style.transitionDuration = "0s";
  overlay.value.style.transitionDuration = "0s";
  // overlay.value.style.zIndex = 999;
  touchSlideoutStartLeft = touchSlideout.value.getBoundingClientRect().left;
  // touchMoveStart = coordsStart.x;
}
function onSwipeEnd(e, direction) {
  overlay.value.style.transitionDuration = `${config.transitionDuration}s`;
  touchSlideout.value.style.transitionDuration = `${config.transitionDuration}s`;
  if (direction === "right") {
    if (!isOpen.value) {
      if (coordsEnd.x - coordsStart.x > config.changeStateTrigger) {
        open();
      } else {
        close();
      }
    }
  } else if (direction === "left") {
    if (isOpen.value && coordsEnd.x <= maxDrawerWidth.value) {
      if (
        (coordsStart.x > maxDrawerWidth.value && coordsEnd.x < maxDrawerWidth.value - config.changeStateTrigger)
      || (coordsStart.x < maxDrawerWidth.value && coordsStart.x - coordsEnd.x > config.changeStateTrigger)
      ) {
        close();
      } else {
        open();
      }
    }
  } else {
    close();
  }
}

onMounted(() => {
  if (viewportWidth.value < config.windowMaxWidth) {
    initStyles();
    window.addEventListener("resize", initStyles, false);
    document.body.addEventListener("click", overlayClick, false);
  }
});

onUnmounted(() => {
  stop();
  window.removeEventListener("resize", initStyles, false);
  document.body.removeEventListener("click", overlayClick, false);
});
</script>

<template>
  <div
    ref="touchSlideout"
    class="touch-slideout"
    :class="{ open: isOpen }"
  >
    <div ref="touchSlideoutWrapper" class="touch-slideout-wrapper">
      <div class="touch-slideout-drawer">
        <slot />
      </div>
    </div>
  </div>
  <div
    ref="overlay"
    class="overlay"
    :class="{ hidden: !isOpen, disabled1: !isSwiping && !isOpen }"
  />
  <!-- :style="{ opacity: overlayOpacity }" -->
</template>

<style lang="scss">
.touch-slideout {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  will-change: transform;
  transition-property: transform;
  transition-timing-function: ease;
}
.touch-slideout-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.touch-slideout-drawer {
  display: block;
  overflow-y: overlay;
  height: 100%;
  width: 100%;
  background: hsl(2, 57%, 40%);
}
.overlay {
  background: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: opacity;
  transition-property: opacity;
  transition-timing-function: ease;
  z-index: 999;
  &.hidden {
    z-index: -999;
  }
}
</style>
