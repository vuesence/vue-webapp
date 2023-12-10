import { onMounted } from "vue";

export function useSplashScreen() {
  onMounted(() => {
    setTimeout(() => {
      document.querySelector(".splash-screen")?.classList.add("fade-out");
      setTimeout(() => {
        document.querySelector("body").classList.remove("splash");
        document.body.style.position = "initial";
      }, 500);
    }, 1000);
  });
}
