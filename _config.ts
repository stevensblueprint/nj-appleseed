import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
  src: "./src",
  dest: "./output",
  server: {
    open: true,
    page404: "./404.html",
  },
  // location: new URL(""),
  watcher: {
    debounce: 10,
  },
});

site.use(jsx());
site.use(
  tailwindcss({
    extensions: [".html", ".js", ".njk", ".jsx"],
    options: {
      content: ["./src/**/*.html", "./src/**/*.njk", "./src/**/*.jsx"],
      theme: {
        extend: {
          colors: {
            primary: "#9D1535", // Maroon
            secondary: "#742a2a", // Darker Maroon
            green: "#919F63",
            "dark-green": "#367800",
            "text-color": "#333333",
            negative: "#ffffff",
            "background-grey": "#EBEBEB",
            "footer-grey": "#7D7D7D",
          },
        },
      },
      plugins: [typography],
    },
  }),
);
site.use(postcss());
site.ignore("index.html");
site.copy("styles.css");
site.copy("assets");

export default site;
