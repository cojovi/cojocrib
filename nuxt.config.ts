export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: ['@nuxthq/studio',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    '
    'nuxt-simple-robots'
  ],

  // Adding the chat widget script
  head: {
    script: [
      {
        src: 'https://widgets.leadconnectorhq.com/loader.js',
        'data-resources-url': 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
        async: true
      }
    ],
    // other head properties (if any)
  },

  // other Nuxt configuration options (if any)
})
