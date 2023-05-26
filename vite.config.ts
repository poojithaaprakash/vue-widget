import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import postcssConfig from './postcss.config.js';

export default defineConfig({
  plugins: [vue(), dts({
    insertTypesEntry: true,
  })], 
  css:{
    postcss: postcssConfig
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'repx_widget',
      formats: ['es'], // adding 'umd' requires globals set to every external module
      fileName: (format: any) => `repx_widget.${format}.js`,
    },
    rollupOptions: {
      // external modules won't be bundled into your library
      external: ['vue', /primevue\/.+/], // not every external has a global
      output: {
        // disable warning on src/index.ts using both default and named export
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps (not useful if 'umd' is not in lib.formats)
        globals: {
          vue: 'Vue',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
});