// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  css: [
    "~/assets/css/main.css",
    "vue3-circle-progress/dist/circle-progress.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  supabase: {
    redirectOptions: {
      exclude: ["/"],
    }
  }
});
