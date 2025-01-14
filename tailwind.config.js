/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			dmSans: [
  				'DM Sans"',
  				'sans-serif'
  			]
  		},

		  perspective: {
			1000: "1000px",
		  },
		  rotate: {
			"y-180": "180deg",
		  },
		
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
}