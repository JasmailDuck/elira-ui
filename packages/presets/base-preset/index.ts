module.exports = {
  theme: {
    extend: {
      keyframes: {
        // Default open (directional) keyframes for tooltip
        "tooltip-open-t": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        // "tooltip-open-b": {
        //   "0%": { opacity: 0, transform: "translateY(-10px)" },
        //   "100%": { opacity: 1, transform: "translateY(0px)" },
        // },
        // "tooltip-open-l": {
        //   "0%": { opacity: 0, transform: "translateX(10px)" },
        //   "100%": { opacity: 1, transform: "translateX(0px)" },
        // },
        // "tooltip-open-r": {
        //   "0%": { opacity: 0, transform: "translateX(-10px)" },
        //   "100%": { opacity: 1, transform: "translateX(0px)" },
        // },

        // // Default close (directional) keyframes for tooltip
        "tooltip-close-t": {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "100%": { opacity: 0, transform: "translateY(10px)" },
        },
        // "tooltip-close-b": {
        //   "0%": { opacity: 1, transform: "translateY(0px)" },
        //   "100%": { opacity: 0, transform: "translateY(-10px)" },
        // },
        // "tooltip-close-l": {
        //   "0%": { opacity: 1, transform: "translateX(0px)" },
        //   "100%": { opacity: 0, transform: "translateX(10px)" },
        // },
        // "tooltip-close-r": {
        //   "0%": { opacity: 1, transform: "translateX(0px)" },
        //   "100%": { opacity: 0, transform: "translateX(-10px)" },
        // },
      },
      animation: {
        "tooltip-open-top": "tooltip-open-t 0.5s cubic-bezier(.67,0,0,1.02)",
        // "tooltip-open-bottom": "tooltip-open-b 0.5s cubic-bezier(.67,0,0,1.02)",
        // "tooltip-open-left": "tooltip-open-l 0.5s cubic-bezier(.67,0,0,1.02)",
        // "tooltip-open-right": "tooltip-open-r 0.5s cubic-bezier(.67,0,0,1.02)",
        "tooltip-close-top": "tooltip-close-t 0.5s cubic-bezier(.67,0,0,1.02)",
        // "tooltip-close-bottom":
        //   "tooltip-close-b 0.5s cubic-bezier(.67,0,0,1.02)",
        // "tooltip-close-left": "tooltip-close-l 0.5s cubic-bezier(.67,0,0,1.02)",
        // "tooltip-close-right":
        //   "tooltip-close-r 0.5s cubic-bezier(.67,0,0,1.02)",
      },
    },
  },
};
