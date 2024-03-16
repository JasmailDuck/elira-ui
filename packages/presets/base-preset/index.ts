module.exports = {
  theme: {
    extend: {
      keyframes: {
        tooltip_top_open: {
          "0%": { opacity: 0, transform: "translateY(42px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        tooltip_top_close: {},
        tooltip_bottom_open: {},
        tooltip_bottom_close: {},
        tooltip_right_open: {},
        tooltip_right_close: {},
        tooltip_left_open: {},
        tooltip_left_close: {},
      },
      animation: {
        tooltipTopOpen: "tooltip_top_open 0.5s ease-in-out",
      },
    },
  },
};
