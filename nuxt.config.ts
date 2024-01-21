export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    '@nuxthq/studio',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots'
  ],

  // Adding the chat widget script
  head: {
    script: [
      {
        src: 'https://widgets.leadconnectorhq.com/loader.js',
        async: true,
        body: true // Optional: if you want the script to be placed before the closing body tag
      }
      // If you need to set data-resources-url or other data attributes, it might need to be handled differently
    ],
    // other head properties (if any)
  },

  // other Nuxt configuration options (if any)
})
