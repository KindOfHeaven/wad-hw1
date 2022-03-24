export default {
    head: {
        title: 'HomeWork1',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@500&family=Roboto:wght@400;500;700&display=swap' },
        ]
    },
    css: [
        `@/assets/scss/global.scss`,
    ],
}
