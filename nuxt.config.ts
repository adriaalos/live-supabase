export default defineNuxtConfig({
    devtools: { enabled: true },
    components: [
        { path: '~/components/_supanuxt', prefix: 'ui' },
        '~/components'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/device',
        '@nuxtjs/robots',
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n',
        'nuxt-swiper',
        'nuxt-lodash',
        'nuxt-icon'
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
