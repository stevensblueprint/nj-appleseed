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
            primary: "#0078E8", // currently blueprint colors
            secondary: "#93C9FE",
            "text-color": "#333333",
            negative: "#ffffff",
            maroon: "#9D1535",
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
