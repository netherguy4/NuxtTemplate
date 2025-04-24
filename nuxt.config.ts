import { fileURLToPath, URL } from "node:url";
const year = 31556952;

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  alias: {
    "/css": fileURLToPath(new URL("./assets/css", import.meta.url)),
  },

  app: {
    head: {
      title: "Upack project",
      titleTemplate: "",
      meta: [
        {
          name: "description",
          content: "",
        },
        {
          name: "keywords",
          content: "",
        },
        {
          name: "author",
          content: "",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "",
        },
        {
          property: "og:title",
          content: "",
        },
        {
          property: "og:description",
          content: "",
        },
        {
          property: "twitter:title",
          content: "",
        },
        {
          property: "twitter:description",
          content: "",
        },
      ],
      htmlAttrs: {
        lang: "",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },

  css: ["/css/nullstyle.css", "/css/base.scss", "/css/utils.scss"],

  image: {
    quality: 75,
  },

  imports: {
    presets: [
      {
        from: "gsap",
        imports: ["gsap"],
      },
      // {
      //   from: "gsap/ScrollToPlugin",
      //   imports: ["ScrollToPlugin"],
      // },
      // {
      //   from: "gsap/ScrollTrigger",
      //   imports: ["ScrollTrigger"],
      // },
    ],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
    routeRules: {
      "/_ipx/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/img/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/_nuxt/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
    },
  },

  ogImage: {
    defaults: {
      renderer: "satori",
      extension: "png",
    },
    compatibility: {
      // disable chromium dependency for prerendering (skips the chromium install in CIs)
      prerender: {
        chromium: false,
      },
    },
  },

  site: {
    url: "",
    name: "",
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @use "/css/additional_data" as *;
                `,
        },
      },
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
});
