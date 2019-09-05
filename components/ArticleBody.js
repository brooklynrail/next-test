import { createElement } from 'react'
import { astConstants } from '../lib/parsers/ast'

const ArticleBody = (props) => props.ast.map((node, index) => {
  switch (node.type) {
    case astConstants.HTML_NODE: {
      return createElement(node.tag, {
        ...node.attrs,
        key: index
      }, node.content.length ? <ArticleBody ast={node.content} /> : null)
    }

    case astConstants.SC_NODE: {
      return (<>
        <br />
        <strong>[{node.tag}]</strong>
        <br />
        <ArticleBody ast={node.content} />
        <br />
        <strong>[/{node.tag}]</strong>
        <br />
      </>)
    }

    case astConstants.TEXT: {
      return node.content
    }
  }
})

export default ArticleBody