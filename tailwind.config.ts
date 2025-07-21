// import type { Config } from 'tailwindcss';
// tailwind.config.js
const plugin = require('tailwindcss/plugin');
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
    extend: {
      'bg-colors': {
        red: '#ff0000',
        yellow: '#ffff00',
        blue: '#0000ff',
      },
    },
  },

  // 添加plugins、darkMode配置项
  plugins: [
    PrimeUI,
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      matchUtilities(
        {
          // 工具类名前缀 => 生成的样式
          'text-size': (value) => ({
            fontSize: value,
          }),
        },
        {
          values: theme('spacing'), // 使用 Tailwind 的 spacing 作为参数值
          type: 'any', // 类型校验，也可以是 'length'、'percentage' 等
        },
      );
      matchUtilities(
        // 定义颜色 red yellow blue
        {
          'bg-color': (value) => ({
            backgroundColor: value,
          }),
        },
        {
          values: {
            red: '#ff0000',
            yellow: '#ffff00',
            blue: '#0000ff',
          },
          // values: theme('bg-colors'), // 使用 Tailwind 的 colors 作为参数值
          type: 'any',
        },
      );
      const newUtilities = {
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
  // 在class模式和media查询模式之间做个权衡。前者更灵活，后者更简单。
  // `class` 模式通过手动添加 `dark` 类实现暗黑模式，灵活性高，适合需要精细控制的场景；
  // `media` 查询模式则根据系统主题自动切换，简单易用，适合快速实现暗黑模式。
  darkMode: ['class', '.dark'],
};
