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
site.use(tailwindcss());
site.use(postcss());
site.ignore("index.html");
site.copy("styles.css");

export default site;
