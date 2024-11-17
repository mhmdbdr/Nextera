import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default defineNuxtPlugin({
  name: "gsap",
  setup(nuxtApp) {
    gsap.registerPlugin(ScrollTrigger)
    return {
      provide: {
        gsap,
        ScrollTrigger,
      },
    }
  },
})
