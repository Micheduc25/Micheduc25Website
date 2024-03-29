export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Micheduc25",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The Micheduc25 official website which describes all our services, tech, innovation, software"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "preconnect",
        crossorigin: true,
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        crossorigin: true,
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        crossorigin: true,
        href:
          "https://fonts.googleapis.com/css2?family=Iceland&family=Roboto:wght@300;400;700;900&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/animate.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome"
  ],

  fontawesome: {
    icons: {
      solid: ["faHome"],
      regular: [],
      light: [],
      duotone: [],
      brands: ["faFacebook", "faTwitter", "faGithub", "faGitlab"]
    },
    component: "Fa",
    suffix: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: "static"
};
