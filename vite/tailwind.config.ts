import type { Config } from "tailwindcss";
import twAnimate from 'tailwindcss-animate';
import plugin from "tailwindcss/plugin";

const nossoPlugin = plugin(({ addBase }) => {
  addBase({
    body: {
      background: 'purple',
    },
  });
}, {
  theme: {
    extend: {
      colors: {
        jstack: {
          blue: '#00f',
          green: '#0f0',
        },
      },
    }
  },
});

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [
    twAnimate,
    nossoPlugin,
  ],
} satisfies Config;
