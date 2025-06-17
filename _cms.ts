import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.collection("Sections", "src:manual/*.md", [
  "title: text",
  "content: markdown",
]);

export default cms;