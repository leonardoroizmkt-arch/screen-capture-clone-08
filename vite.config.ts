// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export for GitHub Pages: enabled only when STATIC_BUILD=true (CI),
// so the normal Lovable build/preview keeps its default server target.
const staticBuild = process.env["STATIC_BUILD"] === "true";
// Base path for project pages (e.g. "/my-repo/"); defaults to root.
const base = process.env["BASE_PATH"] || "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this. The prerender preview server needs the default entry.
    ...(staticBuild
      ? { prerender: { enabled: true, crawlLinks: true }, pages: [{ path: "/" }] }
      : { server: { entry: "server" } }),
  },
  ...(staticBuild ? { nitro: false as const } : {}),
});
