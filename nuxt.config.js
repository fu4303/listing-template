import { headConfig, pwaConfig } from "./config";

export default {
  target: "static",
  head: headConfig,
  pwa: pwaConfig,
  css: ["~/assets/styles.css"],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/content"],
  colorMode: {
    classSuffix: ""
  },
  axios: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  content: {},
  build: {}
};
