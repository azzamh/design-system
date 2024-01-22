import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addComponentsDir,
  extendViteConfig,
} from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * Include font
   * @default true
   */
  font?: boolean,
  /**
   * Component prefix
   * @default 'p'
   */
  prefix?: string,
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name         : '@privyid/persona',
    configKey    : 'persona',
    compatibility: { nuxt: '>=3.0.0' },
  },
  defaults: { font: true, prefix: 'p' },
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Add alias to unsupported ESM package
    nuxt.options.alias['date-fns/locale'] = 'date-fns/esm/locale'

    // Add font CDN
    if (options.font) {
      nuxt.options.app.head.link?.push(
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel        : 'preconnect',
          href       : 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap' },
      )
    }

    // Add Components
    await addComponentsDir({
      path      : resolve('./components'),
      pathPrefix: false,
      prefix    : options.prefix,
      extensions: ['vue'],
    })

    // Add Plugin
    addPlugin({ src: resolve('./runtime/plugin') })

    // Extend vite config
    extendViteConfig((config) => {
      config.optimizeDeps?.exclude?.push('@privyid/persona')
      config.optimizeDeps?.include?.push(
        '@testing-library/user-event',
        'interactjs',
        '@jill64/universal-sanitizer',
        'scroll-into-view',
        'webfontloader',
        'zxcvbn',
        'pdfjs-dist',
        'pdfjs-dist/web/pdf_viewer',
        'vuedraggable',
      )
    })
  },
})
