const siteMetadata = {
  title: 'Blog | Dharmik Gangani',
  author: 'Dharmik Gangani',
  headerTitle: 'Mere Dharma',
  description: 'My personal blog where I share my musings',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://depx.vercel.app',
  siteRepo: 'https://github.com/Dharma-09/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dharmikgangani786@gmail.com',
  github: 'https://github.com/Dharma-09',
  twitter: 'https://twitter.com/im_Dharma09',
  linkedin: 'https://www.linkedin.com/in/parth-desai-2bb1b0160/',
  website: 'https://dpex.vercel.app',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'im_Dharma09',
  },
}

module.exports = siteMetadata
