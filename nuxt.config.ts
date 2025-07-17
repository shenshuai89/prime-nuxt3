// ① 引用自带的主题配置
import Aura from '@primeuix/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // ...
  // ② 添加modules名称
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],

  // ③ 添加配置，参考 https://primevue.org/nuxt/#configuration
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'system',
          cssLayer: false,
        },
      },
    },
  },
});