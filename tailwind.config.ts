import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#046E18",
        "dire-wolf": "#292727",
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
};
