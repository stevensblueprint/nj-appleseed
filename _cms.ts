import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document("Manual", "src:manual.md", [
  "layout: hidden",
  "title: text",
  "manual: markdown",
  "content: markdown",
]);

export default cms;