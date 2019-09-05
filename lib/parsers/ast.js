import { tokenConstants } from './tokens'

export const astConstants = {
  TEXT: 'TEXT',
  SC_NODE: 'SC_NODE',
  HTML_NODE: 'HTML_NODE'
}

const selfClosingScTags = [ 'img' ]
const selfClosingHtmlTags = [ 'hr', 'br' ]

// TODO: Refactor later :P
const parseAst = (tokens) => {
  const ast = []

  let pointer = 0
  let nextPointer = 1

  const next = () => {
    pointer++
    nextPointer++
  }

  while (pointer < tokens.length) {
    switch (tokens[pointer][0]) {
      case tokenConstants.B_TEXT: {
        ast.push({
          type: astConstants.TEXT,
          content: tokens[pointer][1]
        })
        next()
        break
      }

      case tokenConstants.SC_START:
      case tokenConstants.HTML_START: {
        if (!tokens[nextPointer]) {
          ast.push({
            type: astConstants.TEXT,
            content: tokens[pointer][0] === tokenConstants.HTML_START ? '<' : '['
          })
          next()
          break
        }

        const node = {
          type: tokens[pointer][0] === tokenConstants.HTML_START
            ? astConstants.HTML_NODE
            : astConstants.SC_NODE,
          tag: '',
          attrs: {},
          content: []
        }

        const start = tokens[pointer][0]
        const end = tokens[pointer][0] === tokenConstants.HTML_START
          ? tokenConstants.HTML_END
          : tokenConstants.SC_END

        if (tokens[nextPointer][0] === tokenConstants.B_CLOSE) {
          next()
          next()
          break
        }

        let selfClosing = false
        while (
          pointer < tokens.length
          && tokens[pointer][0] != end
        ) {
          if (tokens[pointer][0] === tokenConstants.B_TAG) {
            node.tag = tokens[pointer][1]
          } else if (tokens[pointer][0] === tokenConstants.B_TEXT) {
            const key = tokens[pointer][1].trim()
            next()
            if (
              !tokens[pointer]
              || tokens[pointer][0] !== tokenConstants.B_EQ
            ) {
              node.attrs[key] = ''
              continue
            } else if (!tokens[pointer]) continue
            next()
            if (!tokens[pointer]) continue
            if (
              !tokens[pointer]
              || tokens[pointer][0] !== tokenConstants.B_VALUE
            ) continue
            node.attrs[key] = tokens[pointer][1]
          } else if (
            tokens[pointer][0] === tokenConstants.B_CLOSE
            && tokens[nextPointer]
            && tokens[nextPointer][0] === end
          ) {
            next()
            selfClosing = true
            break
          }

          next()
        }
        next()
        if (!node.tag) break
        if (
          (node.type === astConstants.SC_NODE && selfClosingScTags.includes(node.tag))
          || (node.type === astConstants.HTML_NODE && selfClosingHtmlTags.includes(node.tag))
        ) selfClosing = true
        if (selfClosing) {
          ast.push(node)
          break
        }

        const theseTokens = []
        while (pointer < tokens.length) {
          if (
            tokens[pointer][0] === start
            && tokens[nextPointer]
            && tokens[nextPointer][0] === tokenConstants.B_CLOSE
          ) {
            next()
            next()
            if (
              tokens[pointer]
              && tokens[pointer][0] === tokenConstants.B_TAG
              && tokens[pointer][1] === node.tag
            ) {
              while (
                pointer < tokens.length
                && tokens[pointer][0] !== end
              ) next()
              next()
              break
            } else {
              theseTokens.push([ start ])
              theseTokens.push([ tokenConstants.B_CLOSE ])
              theseTokens.push(tokens[pointer])
            }
          } else {
            theseTokens.push(tokens[pointer])
          }

          next()
        }
        node.content = parseAst(theseTokens)

        ast.push(node)
        break
      }

      default: {
        next()
      }
    }
  }

  return ast
}
export default parseAst