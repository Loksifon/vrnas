/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				'chakra':  'Chakra Petch',
			},

			colors: {
				"success": "#00C566",
				"error": "#FF4747",
				"warning": "#FACC15",

				"blue": "#19B5F1",
				"purple": "#CA6AEB",

				"black100": "#18181B",
				"black50": "#252532",
				"grey1": "#B0B0B2",
				"grey2": "#D1D1D1",
				"white": "#FFFFFF"
			},

			backgroundImage: {
				"linear": "linear-gradient(90deg, #0CBAF1 0%, #E95CE9 100%)"
			},
		},

		fontSize: {
			'h1': ['4rem', {
				fontWeight: '600',
				lineHeight: 'normal',
			}],

			'h2': ['3rem', {
				fontWeight: '600',
				lineHeight: '3.625rem'
			}],

			'h3': ['2.5rem', {
				fontWeight: '600',
				lineHeight: '3.625rem'
			}],
			
			'h4': ['2.25rem', {
				fontWeight: '500',
				lineHeight: '2.75rem'
			}],

			'h5': ['2rem', {
				fontWeight: '600',
				lineHeight: 'normal',
			}],

			'h6': ['1.75rem', {
				fontWeight: '600',
				lineHeight: 'normal',
			}],

			'h7': ['1.25rem', {
				fontWeight: '400',
				lineHeight: 'normal',
			}],

			'h8': ['1.25rem', {
				fontWeight: '500',
				lineHeight: 'normal',
			}],

			'h9': ['1.125rem', {
				fontWeight: '400',
				lineHeight: 'normal',
			}],

			'h10': ['1rem', {
				fontWeight: '600',
				lineHeight: '1.75rem'
			}],

			'h11': ['1rem', {
				fontWeight: '600',
				lineHeight: 'normal',
			}],

			'h12': ['0.875rem', {
				fontWeight: '400',
				lineHeight: 'normal',
			}],

			'b1': ['1rem', {
				fontWeight: '300',
				lineHeight: '1.75rem',
			}],

			'b2': ['0.875rem', {
				fontWeight: '400',
				lineHeight: '1.75rem',
			}],

			'b3': ['1rem', {
				fontWeight: '400',
				lineHeight: '1.75rem',
			}],

			'b4': ['0.75rem', {
				fontWeight: '400',
				lineHeight: '1.25rem',
			}],

			'c1': ['1rem', {
				fontWeight: '500',
				lineHeight: 'normal',
			}],

			'c2': ['0.875rem', {
				fontWeight: '500',
				lineHeight: '1.25rem',
			}],

			'c3': ['0.625rem', {
				fontWeight: '500',
				lineHeight: '0.875rem',
			}],

			'but1': ['0.875rem', {
				fontWeight: '700',
				lineHeight: '0.875rem',
			}],

			'but2': ['1rem', {
				fontWeight: '300',
				lineHeight: '1.75rem',
			}],
		}
  },

  plugins: [],
}

