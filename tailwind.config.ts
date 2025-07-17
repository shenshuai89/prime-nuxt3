// import type { Config } from 'tailwindcss';

// 引用PrimeUI
import PrimeUI from 'tailwindcss-primeui';

export default {
  content: [],
  theme: {
    extend: {},
  },

  // 添加plugins、darkMode配置项
  plugins: [PrimeUI],
  darkMode: ['class', '.p-dark'],
};
