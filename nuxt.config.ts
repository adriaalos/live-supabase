// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/device',
        '@nuxtjs/robots',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        'nuxt-swiper'
    ]
})
