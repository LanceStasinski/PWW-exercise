module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#142B47",
        "primary-2": "#1B3A61",
        "primary-3": "#225089",
        "primary-4": "#3068AD",
        "primary-5": "#0074C1",
        "primary-6": "#93A4BD",
        "primary-7": "#35B0CB",
        "secondary-1": "#415A7B",
        "tertiary-1": "#8C6910",
        "tertiary-2": "#D2B859",
        "tertiary-3": "#F0EBDD",
        "tertiary-4": "#F7F4ED",
        "tertiary-5": "#E9261D",
        "gray-1": "#000000",
        "gray-2": "#333333",
        "gray-3": '#666666',
        "gray-4": "#757575",
        "gray-5": "#C3C3C3",
        "gray-6": "#CCCCCC",
        "gray-7": "#E1E5EA",
        "gray-8": "#F3F6F9",
        'faded-blue': "rgba(147, 164, 189, 0.6)"
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"],
        "Roboto-Condensed": ["Roboto-Condensed", "sans-serif"],
        "Roboto-Slab": ["Roboto Slab", "serif"],
      },
      keyframes: {
        "btn-hover": {
          from: { "background-color": "#0074C1" },
          to: { "background-color": "#225089" },
        },
        "card-mouse-enter": {
          from: {
            "box-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            transform: "scale(1)",
          },
          to: {
            "box-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            transform: "scale(1.02)",
          }
        },
        "card-mouse-exit": {
          from: {
            "box-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            transform: "scale(1.02)",
          },
          to: {
            "box-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            transform: "scale(1)",
          }
        },
      },
      animation: {
        "btn-hover": "btn-hover 300ms ease-out forwards",
        "card-mouse-enter": "card-mouse-enter 200ms ease-out forwards",
        "card-mouse-exit": "card-mouse-exit 200ms ease-out forwards"
      },
      height: {
        "93.33px": "93.33px",
      },
    },
  },
  plugins: [],
};
