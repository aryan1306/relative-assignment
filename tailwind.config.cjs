/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Tomorrow", "sans-serif", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				"dark-gray": "rgb(46, 49, 73, 0.1)",
				"light-gray": "rgb(98, 106, 136, 0.1)",
				"border-light": "rgb(236, 240, 255)",
				"border-dark": "rgb(59, 63, 87)",
				"label-color": "rgb(115, 123, 174)",
				background: "#14172b",
				"pill-color": "rgb(20, 23, 43)",
			},
		},
	},
	plugins: [],
};
