import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import { splitVendorChunkPlugin } from "vite"
import copy from "rollup-plugin-copy"

const vueDocsPlugin = {
  name: "vue-docs",
  transform(code, id) {
    if (!/vue&type=docs/.test(id)) return
    return `export default ''`
  },
}

export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    vueDocsPlugin,
    copy({
      targets: [{ src: "src/assets/styles/", dest: "dist/" }],
      hook: "writeBundle",
    }),
    copy({
      targets: [{ src: "src/lux-design-system.d.ts", dest: "dist/" }],
      hook: "writeBundle",
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.js"),
      name: "lux-styleguidist",
      // the proper extensions will be added
      fileName: "lux-styleguidist",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
