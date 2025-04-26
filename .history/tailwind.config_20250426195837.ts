import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        circular: ["circular-web", "sans-serif"],
        general: ["general", "sans-serif"],
        robertMedium: ["robert-medium", "sans-serif"],
        robertRegular: ["robert-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
