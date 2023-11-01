export default defineAppConfig({
  docus: {
    title: 'cojovi',
    description: 'Come get your daily intake of tech',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'the_cojovi',
      github: 'cojovi',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      facebook: 'techdonecheap',
      instagram: 'after5diy',
      tiktok: 'cojovi',
      youtube: '@techdonecheap'
    },

    github: {
      dir: '.tree/main/content',
      branch: 'main',
      repo: 'cojocrib',
      owner: 'cojovi',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'cojovi.com'
    },

    footer: {
      credits: {
        icon: 'tabler:binary',
        text: 'Powered by cojovi',
        href: 'https://cojovi.com'
      }
    }
  }
})