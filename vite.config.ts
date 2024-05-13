import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import viteSvgIcons, { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import legacy from '@vitejs/plugin-legacy'

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir)
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteSvgIcons(),
    // viteSvgIcons({
    //   iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
    //   symbolId: 'icon-[dir]-[name]'
    // }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
      // symbolId: '[name]',
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    // alias: [
    //   {
    //     find: /\/@\//,
    //     replacement: pathResolve('src') + '/',
    //   },
    //   // /#/xxxx => types/xxxx
    //   {
    //     find: /\/#\//,
    //     replacement: pathResolve('types') + '/',
    //   },
    // ],
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.vue', '.json', '.ts']
  }
})
