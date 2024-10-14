/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'utk-smokey': "var(--utk-logo--smokey)",
            'utk-orange': "var(--utk-logo--orange)",
            'utk-white': "var(--utk-logo--white)",
            'utk-blue--accent': "var(--utk-blue--accent)",
            'utk-light-steel-blue--accent': "var(--utk-light-steel-blue--accent)",
            'utk-light-blue--accent': "var(--utk-light-blue--accent)",
            'utk-white--accent': "var(--utk-white--accent)",
            'utk-link': "var(--utk-link)",
          },
      },
    },
    plugins: [],
  }