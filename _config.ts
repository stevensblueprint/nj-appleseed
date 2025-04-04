import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

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
            primary: "#9D1535",
            secondary: "#742a2a",
            green: "#919F63",
            "text-color": "#333333",
            negative: "#ffffff",
            "background-grey": "#EBEBEB",
            "footer-grey": "7D7D7D",
          },
        },
      },
    },
  }),
)
site.use(postcss());
site.ignore("index.html");
site.copy("styles.css");
site.copy("assets");

export default site;
