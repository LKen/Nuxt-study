import '@nuxt/types'

declare module '@nuxt/types/app' {
  interface Context {
    userAgent: string | undefined
  }
}
