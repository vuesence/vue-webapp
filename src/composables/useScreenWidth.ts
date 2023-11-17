import { ref } from "vue";

export function useScreenWidth(breakpoints: object) {
  const screenWidthFactor = ref("");
  const screenSizeMatches = [];

  const breakpointArray = Object.entries(breakpoints).sort((a, b) => +a[1] - +b[1]);

  for (let i = 0; i < breakpointArray.length; i++) {
    const clauses = [];
    if (i > 0) {
      clauses.push(`(min-width: ${breakpointArray[i - 1][1] + 1}px)`);
    }

    if (i < breakpointArray.length - 1) {
      clauses.push(`(max-width: ${breakpointArray[i][1]}px)`);
    }

    const mediaMatch = window.matchMedia(clauses.join(" and "));
    mediaMatch.addEventListener("change", (e) => {
      if (e.matches) {
        screenWidthFactor.value = breakpointArray[i][0];
        document.body.classList.add(breakpointArray[i][0]);
      } else {
        document.body.classList.remove(breakpointArray[i][0]);
      }
    });
    if (mediaMatch.matches) {
      screenWidthFactor.value = breakpointArray[i][0];
      document.body.classList.add(breakpointArray[i][0]);
    } else {
      document.body.classList.remove(breakpointArray[i][0]);
    }
    screenSizeMatches.push(mediaMatch);
  }

  return {
    screenWidthFactor,
  };
}
