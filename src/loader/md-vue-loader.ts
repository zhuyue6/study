import markdownIt = require('markdown-it')
import hljs = require('highlight.js')
let mdi = null
const mdiConfig: markdownIt.Options = {
  highlight (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const aaa = hljs.highlight(lang, str, true).value
        debugger
        return `<pre class="hljs">
            <code>${ hljs.highlight(lang, str, true).value }</code>
          </pre>
        `
      } catch (__) {
        return `<pre class="hljs">
            <code>${ mdi.utils.escapeHtml(str) }</code>
          </pre>
        `
      }
    }
  }
}
module.exports = function(source: any) {
  mdi = new markdownIt(mdiConfig)
  const template = mdi.render(source)
  return `
    <template>
      <div class="sub-container">
        ${template}
      </div>
    </template>
    <style scoped>
      .sub-container {
        height: 100%;
        padding-right: 20px;
        overflow-y: auto;
      }
    </style>
  `
}