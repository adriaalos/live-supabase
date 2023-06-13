export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
        { path: '~/components/_supuxt', prefix: 'ui' },
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
        '@nuxtjs/i18n',
        'nuxt-swiper',
        'nuxt-lodash'
    ],
    i18n: {
        strategy: 'no_prefix',
        locales: [
            {
                code: 'en',
                file: 'en.json'
            }
        ],
        langDir: 'assets/locales/'
    }
})
