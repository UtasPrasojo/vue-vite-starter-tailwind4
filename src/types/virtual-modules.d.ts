/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client" />

declare module '~pages' {
  import type { RouteRecordRaw } from 'vue-router'
  const routes: RouteRecordRaw[]
  export default routes
}

declare module 'virtual:generated-layouts' {
  import type { RouteRecordRaw } from 'vue-router'
  export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}
