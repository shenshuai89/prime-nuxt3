// import type { Config } from 'tailwindcss';

// 引用PrimeUI
import PrimeUI from 'tailwindcss-primeui';

export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },

  // 添加plugins、darkMode配置项
  plugins: [PrimeUI],
  darkMode: ['media', '.dark'],
};
