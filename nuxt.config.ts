// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // the css file using from assets directory
  // css:['~/assets/css/main.css'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      // i am using css and js file from public directory
      link:[{rel:'stylesheet',href:'css/style.css',type:'text/css'}],
      script: [
        {src:'/js/script.js'},
      ],
     
    }
  },
})
