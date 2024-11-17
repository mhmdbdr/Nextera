export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.css", "assets/global.scss", "@fortawesome/fontawesome-svg-core/styles.css", "normalize.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/device", "nuxt-viewport"],
  app: {
    head: {
      title: "Nextera",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "A blog built with Nuxt 3",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})