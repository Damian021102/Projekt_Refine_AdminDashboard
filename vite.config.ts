import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import txconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [txconfigPaths(), react()],
});
