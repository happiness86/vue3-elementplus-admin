/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 为环境变量添加typescript智能提示
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}