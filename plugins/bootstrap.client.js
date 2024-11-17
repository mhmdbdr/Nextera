import bootstrap from "bootstrap/dist/js/bootstrap.bundle"

export default defineNuxtPlugin({
  name: "bootstrap",
  setup(nuxtApp) {
    return {
      provide: {
        bootstrap,
      },
    }
  },
})
