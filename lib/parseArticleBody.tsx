import parseTokens from './parsers/tokens'
import parseAst from './parsers/ast'

export default (article) => {
  const tokens = parseTokens(article)
  const ast = parseAst(tokens)
  return ast
}