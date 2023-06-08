// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
        { path: '~/components/_ui', prefix: 'ui' },
        '~/components'
    ],
    modules: [
        '@nuxthq/ui',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/device',
        '@nuxtjs/robots',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        'nuxt-lodash'
    ]
})
