import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default defineNuxtPlugin({
  name: "gsap",
  setup(nuxtApp) {
    gsap.registerPlugin(ScrollTrigger)
    // register-animation-start

    gsap.registerEffect({
      name: "textShow",
      extendTimeline: true,
      defaults: {},
      effect: (targets, config) => {
        return gsap.utils.toArray(targets).map((target) => {
          return gsap.from(target, {
            y: "50%",
            autoAlpha: 0,
            duration: 0.3,
            ease: "power1.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: target,
              start: "top 75%",
              end: "bottom bottom",
              toggleActions: "play none none reverse",
              markers: false,
            },
          })
        })
      },
    })
    gsap.registerEffect({
      name: "feTurbulence",
      extendTimeline: true,
      defaults: {
        filterSelector: "#distortionFilter",
      },
      effect: (targets, config) => {
        const tl = gsap.timeline({ paused: true })
        const filterElement = document.querySelector(
          `${config.filterSelector} feTurbulence`
        )

        if (filterElement) {
          tl.to(filterElement, {
            attr: { baseFrequency: 0.05 },
            duration: 0.3,
            ease: "power1.out",
          })
        }

        gsap.utils.toArray(targets).forEach((target) => {
          target.addEventListener("mouseenter", () => tl.play())
          target.addEventListener("mouseleave", () => tl.reverse())
        })

        return tl
      },
    })

    // register-animation-end
    return {
      provide: {
        gsap,
        ScrollTrigger,
      },
    }
  },
})
