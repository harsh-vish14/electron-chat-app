/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        bg: '#2D2727',
        white: '#f5f5f5',
        pink: '#8F43EE'
      },
      input: {
        bg: '#413543'
      }
    }
  }
}
