export const tokenConstants = {
  SC_START: 'SC_START',
  SC_END: 'SC_END',

  HTML_START: 'HTML_START',
  HTML_END: 'HTML_END',

  B_TAG: 'B_TAG',
  B_CLOSE: 'B_CLOSE',
  B_TEXT: 'B_TEXT',
  B_EQ: 'B_EQ',
  B_VALUE: 'B_VALUE'
}

const quotes = [ '\'', '"' ]
const scTags = [
  'quote', 'blockquote',
  'poetry', 'promo', 'img'
]
const htmlTags = [
  'p', 'em', 'a', 'strong',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'hr', 'br', 'ol', 'sup', 'div', 'li',
  'iframe'
]

const unknownTags = []

// TODO: Refactor later :P
export default (article) => {
  const tokens = []

  let pointer = 0
  let nextPointer = 1

  let textBuffer = ''

  let quoted = null
  let scTag = false
  let htmlTag = false

  const next = () => {
    pointer++
    nextPointer++
  }

  const isWhitespace = (string) => /\s/.test(string)
  const shrinkWhitespace = (string) => string.replace(/[ \f\n\r\t\v]+/g, ' ')
  const skipWhitespace = () => {
    while (isWhitespace(article[nextPointer])) next()
  }

  const pushToken = () => {
    if (
      (scTag && scTags.includes(textBuffer.trim()))
      || (htmlTag && htmlTags.includes(textBuffer.trim()))
    ) {
      tokens.push([ tokenConstants.B_TAG, textBuffer.trim() ])
      textBuffer = ''
    } else if (!quoted && textBuffer.trim() && (scTag || htmlTag)) {
      if (!unknownTags.includes(textBuffer.trim())) {
        console.log('Unknown tag (possible):', textBuffer.trim())
        if (textBuffer.trim() === '"') console.log(tokens)
        unknownTags.push(textBuffer.trim())
      }
      tokens.push([ tokenConstants.B_TEXT, textBuffer.trim() ])
      textBuffer = ''
    }
  }

  const pushText = () => {
    pushToken()
    if (!scTag && !htmlTag && textBuffer) {
      tokens.push([ tokenConstants.B_TEXT, shrinkWhitespace(textBuffer) ])
      textBuffer = ''
    }
  }

  while (pointer < article.length) {
    switch (article[pointer]) {
      case '[': {
        pushText()
        tokens.push([ tokenConstants.SC_START ])
        skipWhitespace()
        next()

        scTag = true
        htmlTag = false

        break
      }
      case ']': {
        if (quoted || !scTag) {
          textBuffer += article[pointer]
        } else {
          pushText()
          tokens.push([ tokenConstants.SC_END ])

          scTag = false
          htmlTag = false
        }
        next()

        break
      }

      case '<': {
        pushText()
        tokens.push([ tokenConstants.HTML_START ])
        skipWhitespace()
        next()

        scTag = false
        htmlTag = true

        break
      }
      case '>': {
        if (quoted || !htmlTag) {
          textBuffer += article[pointer]
        } else {
          pushText()
          tokens.push([ tokenConstants.HTML_END ])

          scTag = false
          htmlTag = false
        }
        next()

        break
      }

      case '/': {
        if (quoted || (!scTag && !htmlTag)) {
          textBuffer += article[pointer]
        } else {
          pushText()
          tokens.push([ tokenConstants.B_CLOSE ])
          skipWhitespace()
        }
        next()

        break
      }
      case '=': {
        if (quoted || (!scTag && !htmlTag)) {
          textBuffer += article[pointer]
        } else {
          pushText()
          tokens.push([ tokenConstants.B_EQ ])
          skipWhitespace()
          if (quotes.includes(article[nextPointer])) {
            quoted = article[nextPointer]
            next()
          } else {
            quoted = ' '
          }
        }
        next()

        break
      }

      default: {
        if (article[nextPointer] === quoted) {
          textBuffer += article[pointer]
          tokens.push([ tokenConstants.B_VALUE, textBuffer ])
          quoted = false
          textBuffer = ''
          next()
          next()
        } else if (
          article[nextPointer] === (scTag ? ']' : '>')
          && quoted === ' '
        ) {
          textBuffer += article[pointer]
          tokens.push([ tokenConstants.B_VALUE, textBuffer ])
          quoted = false
          textBuffer = ''
          next()
        } else if (article[pointer] === quoted) {
          tokens.push([ tokenConstants.B_VALUE, textBuffer ])
          quoted = false
          textBuffer = ''
          skipWhitespace()
          next()
        } else if (isWhitespace(article[nextPointer])) {
          textBuffer += article[pointer]
          pushToken()
          next()
        } else {
          textBuffer += article[pointer]
          next()
        }

        break
      }
    }
  }

  if (quoted) {
    tokens.push([ tokenConstants.B_VALUE, textBuffer.trim() ])
  } else pushText()
  return tokens
}