import type { ComputedRef, Ref } from "vue";
import { computed, reactive, ref } from "vue";

export type ISwipeDirection = "up" | "down" | "left" | "right" | "none";

export interface IPoint {
  x: number
  y: number
}

export interface ISwipeOptions {
  /*
   * Specify a custom `window` instance, e.g. working with iframes or in testing environments.
   */
  window?: Window

  /**
   * Register events as passive
   *
   * @default true
   */
  passive?: boolean

  /**
   * @default 50
   */
  threshold?: number

  /**
   * Callback on swipe start
   */
  onSwipeStart?: (e: TouchEvent) => void

  /**
   * Callback on swipe moves
   */
  onSwipe?: (e: TouchEvent) => void

  /**
   * Callback on swipe ends
   */
  onSwipeEnd?: (e: TouchEvent, direction: ISwipeDirection) => void
}

export interface ISwipeReturn {
  isSwiping: Ref<boolean>
  direction: ComputedRef<ISwipeDirection>
  coordsStart: Readonly<IPoint>
  coordsEnd: Readonly<IPoint>
  stop: () => void
}

/**
 * Reactive touch swipe detection.
 *
 * @param target
 * @param options
 */
export function useTouchSwipe(
  // target: MaybeRefOrGetter<EventTarget | null | undefined>,
  target: EventTarget,
  options: ISwipeOptions = {},
): ISwipeReturn {
  const { threshold = 50, onSwipe, onSwipeEnd, onSwipeStart } = options;

  const isSwiping = ref(false);
  const coordsStart = reactive<IPoint>({ x: 0, y: 0 });
  const coordsEnd = reactive<IPoint>({ x: 0, y: 0 });

  const { max, abs, round } = Math;

  const diffX = computed(() => round(coordsStart.x - coordsEnd.x));
  const diffY = computed(() => round(coordsStart.y - coordsEnd.y));

  const isThresholdExceeded = computed(() =>
    isThresholdExceeded.value || max(abs(diffX.value), abs(diffY.value)) >= threshold);

  const direction = computed((): ISwipeDirection => {
    if (!isThresholdExceeded.value) {
      return "none";
    }

    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? "left" : "right";
    } else { return diffY.value > 0 ? "up" : "down"; }
  });

  const listenerOptions: { passive?: boolean; capture?: boolean } = { passive: true, capture: false };

  const onTouchEnd = (e: TouchEvent) => {
    if (isSwiping.value) {
      onSwipeEnd?.(e, direction.value);
      isSwiping.value = false;
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length !== 1) {
      return;
    }

    if (listenerOptions.capture && !listenerOptions.passive) {
      e.preventDefault();
    }

    coordsStart.x = coordsEnd.x = round(e.touches[0].clientX);
    coordsStart.y = coordsEnd.y = round(e.touches[0].clientY);
    onSwipeStart?.(e);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length !== 1) {
      return;
    }

    coordsEnd.x = round(e.touches[0].clientX);
    coordsEnd.y = round(e.touches[0].clientY);
    if (!isSwiping.value && isThresholdExceeded.value) {
      isSwiping.value = true;
    }

    if (isSwiping.value) {
      onSwipe?.(e);
    }
  };

  // useEventListener(target, ["touchend", "touchcancel"], onTouchEnd, listenerOptions),
  target.addEventListener("touchstart", onTouchStart, listenerOptions);
  target.addEventListener("touchmove", onTouchMove, listenerOptions);
  target.addEventListener("touchend", onTouchEnd, listenerOptions);
  target.addEventListener("touchcancel", onTouchEnd, listenerOptions);

  function stop() {
    target.removeEventListener("touchstart", onTouchStart, listenerOptions);
    target.removeEventListener("touchmove", onTouchMove, listenerOptions);
    target.removeEventListener("touchend", onTouchEnd, listenerOptions);
    target.removeEventListener("touchcancel", onTouchEnd, listenerOptions);
  };

  return {
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    stop,
  };
}
