/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEBUG: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
