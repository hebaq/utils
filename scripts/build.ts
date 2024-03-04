import path from "path";
import { UserConfig } from "vite";
import dts from "vite-plugin-dts";
import { buildPlugin } from "vite-plugin-build";

export const buildConfig: UserConfig = {
  plugins: [
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
        ignoreInputs: [
          "**/*.spec.*",
          "**/*.test.*",
          "**/*.d.ts",
          "**/__tests__/**",
          "docs/**/*.ts",
          "**/*.vue",
          "src/type.d.ts",
          "test-utils/**",
        ],
      },
      libBuild: {
        buildOptions: {
          rollupOptions: {
            external: ["vue"],
            output: { globals: { vue: "Vue" } },
          },
          lib: {
            formats: ["es", "cjs"],
            entry: path.resolve(__dirname, "..", "src/index.ts"),
            name: "@hebai/utils",
            fileName: (format) => `js/index.${format}.js`,
          },
        },
      },
    }),
  ],
};

export const buildFullTypesConfig: UserConfig = {
  plugins: [
    dts({
      include: ["src/**/*.ts"],
      outDir: path.resolve(__dirname, "..", "types"),
    }),
  ],
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "..", "src/index.ts"),
      name: "@hebai/utils",
      formats: ["es", "cjs"],
      fileName: (format) => {
        return `js/index.${format}.js`;
      },
    },
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};
