/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontSize: {
            16: '16px'
        }
      },
    },
    corePlugins: {
      preflight: false,
    },
    plugins: [],
  }