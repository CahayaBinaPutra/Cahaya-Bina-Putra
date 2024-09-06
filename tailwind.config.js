/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('./assets/Contact.png')",
        'about':"url('.assets/Bannersejarah.png')",
        'flower': "url('./assets/Rectangle24.png')",
        '1': "url('./assets/bg 1.png')",
        '2': "url('./assets/bg 2.png')",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Atau nama font lain yang Anda pilih
      },
      colors: {
        customTeal: '#00605E', // Menambahkan warna kustom
      },
    },
  },
  plugins: [],
}

