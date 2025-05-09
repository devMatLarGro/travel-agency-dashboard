import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "devmatgro",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

// export default defineConfig({
//   plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
//   ssr: {
//     noExternal: [/@syncfusion/]
//   }
// });

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), reactRouter(),sentryReactRouter(sentryConfig, config), tsconfigPaths()],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
