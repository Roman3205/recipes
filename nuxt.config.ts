// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@nuxt/image"],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  icon: {
    serverBundle: {
      remote: "jsdelivr",
    },
    // clientBundle: {
    //   icons: ["logos:nuxt"],
    //   scan: true,
    // },
  },

  experimental: {
    viewTransition: true,
  },
});
