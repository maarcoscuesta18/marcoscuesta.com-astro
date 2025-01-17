import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
    integrations: [tailwind(), alpinejs()],
    output: "server",
    adapter: vercel({
        analytics: true,
        webAnalytics: {
            enabled: true,
        },
    }),
    i18n: {
        defaultLocale: "en",
        locales: ["en", "es"],
    },
});
