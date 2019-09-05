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
      // TODO: Actually render shortcodes
      return (
        <div key={index}>
          <br />
          <strong>[{node.tag}]</strong>
          <br />
          <ArticleBody ast={node.content} />
          <br />
          <strong>[/{node.tag}]</strong>
          <br />
        </div>
      )
    }

    case astConstants.TEXT: {
      // TODO: Better solution
      return <span
        key={index}
        dangerouslySetInnerHTML={{ __html: node.content }}
      />
    }
  }
})

export default ArticleBody