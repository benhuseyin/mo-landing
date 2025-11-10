
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'tr'],

    // Used when no locale matches
    defaultLocale: 'en',
    localeDetection: false,
    localePrefix: 'as-needed',
    pathnames: {
        // If all locales use the same pathname, a single
        // external path can be used for all locales
        '/': '/',
        '/blog': '/blog',

        // If some locales use different paths, you can
        // specify the relevant external pathnames
        '/about': {
            tr: '/hakkimizda',
        },
        '/tr': '/tr',
    },
});
