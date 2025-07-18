// ① 引用自带的主题配置
import Aura from '@primeuix/themes/aura';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // ...
  // ② 添加modules名称
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ['primeicons/primeicons.css', '@/assets/css/tailwind.css'],
  // 颜色主题方案
  colorMode: {
    classSuffix: '', // 类名后缀，默认值"-mode"，如果不加前缀和后缀，类名为 'dark'|'light'，此时 Nuxt DevTools 也会跟着切换颜色模式
    preference: 'light', // 默认偏好：'system' | 'light' | 'dark'
    fallback: 'light', // 回退模式
    dataValue: 'theme', // HTML 数据属性名
    storage: 'localStorage', // 存储方式：'localStorage' | 'cookie'
    storageKey: 'nuxt-color-mode', // 存储键名
  },
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
          // 注释掉或者使用 system，则跟随设备系统主题，同时可以让tailwind css的dark模式生效
          // darkModeSelector: 'system',
          // 如果设置 .dark ，则可以手动切换主题，使用的是prime切换主题配置，同时会让tailwind css的dark模式生效
          darkModeSelector: '.dark',
          cssLayer: false,
        },
      },
    },
  },
});
