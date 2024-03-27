const path = require("path")

module.exports = {
  // set your styleguidist configuration here
  title: "LUX Style Guide",
  components: "src/components/**/[A-Z]*.vue",
  defaultExample: true,
  pagePerSection: true,
  sections: [
    {
      name: "Components",
      components: "src/components/[A-Z]*.vue",
    },
    {
      name: "Icons",
      components: "src/components/icons/[A-Z]*.vue",
    },
    {
      name: "Internal Components",
      components: "src/components/_*.vue",
    },
    {
      name: "Logos",
      components: "src/components/logos/[A-Z]*.vue",
    },
  ],
  exampleMode: "expand",
  enhancePreviewApp: path.join(__dirname, "styleguide_vue_app.js"),
}
