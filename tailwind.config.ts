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
  // 在class模式和media查询模式之间做个权衡。前者更灵活，后者更简单。
  // `class` 模式通过手动添加 `dark` 类实现暗黑模式，灵活性高，适合需要精细控制的场景；
  // `media` 查询模式则根据系统主题自动切换，简单易用，适合快速实现暗黑模式。
  darkMode: ['class', '.dark'],
};
