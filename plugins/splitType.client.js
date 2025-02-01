import SplitType from "split-type"

export default defineNuxtPlugin({
  name: "splittype",
  setup(nuxtApp) {
    return {
      provide: {
        SplitType,
      },
    }
  },
})
