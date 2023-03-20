/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        siganture: ['Great Vibes']
    },
    animation:{
      spin: 'spin 1s lineal infinite',
      wiggle: 'wiggle 1s ease-in-out infinite ',
      typewriter: 'typewriter 1s steps(10) 1s forwards',
      animate: 'animate 6s linear infinite',
    },
    keyframes:{
      wiggle:{
        '0%, 100%' :{ transform: 'rotate(-6deg)'},
        '50%' :{ transform: 'rotate(-10deg)'},
        typewriter: {
        from: { width: '0' },
        to: { width: '100%' },
        }
      },
    animate:{
      '0%,10%,100%' :{
        width: '0%'
      },
      '70%, 80%, 90%':{
        width:'100%'
      },
    }
    },
    
  },
 
  plugins: [],
},
}
