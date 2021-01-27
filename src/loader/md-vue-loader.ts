import markdownIt = require('markdown-it')
module.exports = function(source) {
  const mdi = new markdownIt()
  const template = mdi.render(source)
  return `
    <template>
      <div class="main-container">
        ${template}
      </div>
    </template>
    <style>
      .main-container {
        height: 100%;
        overflow-y: auto;
      }
    </style>
  `
}