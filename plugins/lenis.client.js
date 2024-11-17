import Lenis from "lenis"

export default defineNuxtPlugin({
  name: "lenis",
  enforce: import.meta.server ? "pre" : "post",
  setup(nuxtApp) {
    let lenis
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return {
      provide: {
        lenis,
      },
    }
  },
})
