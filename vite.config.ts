import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            components: "/src/components",
            core: "/src/core",
            assets: "/src/assets",
            hooks: "/src/hooks",
            pages: "/src/pages",
            styles: "/src/styles",
            shared: "/src/shared",
            routes: "/src/routes",
        },
    },
});
