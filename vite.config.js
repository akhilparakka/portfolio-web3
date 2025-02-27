import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: false,
        v3_relativeSplatPath: false,
        v3_throwAbortReason: false,
      },
    }),
  ],
});
