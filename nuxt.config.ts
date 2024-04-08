// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  // composables method 2
  imports: {
    dirs: [
      'composables/**'
    ]
  }
 
})
