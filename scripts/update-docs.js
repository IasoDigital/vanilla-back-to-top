const fs = require('fs')
const { name, version } = require('../package.json')

const docs = [ 'README.md', 'MORE.md' ]
docs.forEach(doc => {
  const content = fs.readFileSync(doc).toString()

  fs.writeFileSync(
    doc,
    content.replace(
      new RegExp(`(https://unpkg.com/)[^@\)]+@[^/]*/`, 'g'),
      `$1${name}@${version}/`
    )
  )
})
