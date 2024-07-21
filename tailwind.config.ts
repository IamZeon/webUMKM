import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c_primary: "#eb5e28",
        c_black: "#252422",
        c_dark_gray: "#403d39",
        c_light_gray: "#ccc5b9",
        c_white: "#fffcf2",
      },
      backgroundImage: {
        "gradient-bt": "linear-gradient(0deg, #CD4713 0%, #eb5e28 50%)",
        "gradient-tb": "linear-gradient(180deg, #CD4713 13%, #eb5e28 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
