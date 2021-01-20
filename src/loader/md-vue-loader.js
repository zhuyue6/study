const markdownIt = require('markdown-it')
module.exports = function(source) {
  const mdi = new markdownIt()
  const template = mdi.render(source)
  return `
    <template>
      <div>
        ${template}
      </div>
    </template>
  `
}