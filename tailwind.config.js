/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Agora o Tailwind vai reconhecer a classe 'bg-background'
        background: 'var(--background)',
      },
    },
  },

  plugins: [],
}

