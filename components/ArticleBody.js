import { Fragment, createElement } from 'react'
import { astConstants } from '../lib/parsers/ast'

const attrsToString = (attrs) => {
  let string = ''
  for (let key in attrs) {
    string += `${key}='${attrs[key].replace('\'', '\\\'')}' `
  }
  return string.trim()
}

const replaceAttrs = (attrs) => {
  if (attrs.class) {
    attrs.className = attrs.class
    delete attrs.class
  }
  if (attrs.frameborder) {
    attrs.frameBorder = attrs.frameborder
    delete attrs.frameborder
  }
  if (attrs.allowfullscreen) {
    attrs.allowFullScreen = attrs.allowfullscreen
    delete attrs.allowfullscreen
  }

  return attrs
}

const ArticleBody = (props) => props.ast.map((node, index) => {
  switch (node.type) {
    case astConstants.HTML_NODE: {
      return createElement(node.tag, {
        ...replaceAttrs(node.attrs),
        key: index
      }, node.content.length ? <ArticleBody ast={node.content} /> : null)
    }

    case astConstants.SC_NODE: {
      // TODO: Actually render shortcodes
      return (
        <div key={index}>
          <br />
          <strong>[{node.tag}] <em>{attrsToString(node.attrs)}</em></strong>
          <br />

          <ArticleBody ast={node.content} />

          <br />
          <strong>[/{node.tag}]</strong>
          <br /><br />
        </div>
      )
    }

    case astConstants.TEXT: {
      // TODO: Better solution
      return (<Fragment key={index}>
        <span dangerouslySetInnerHTML={{ __html: node.content }} />
        <style jsx>{`
          span {
            font-family: 'Untitled Serif', serif;
          }
        `}</style>
      </Fragment>)
    }
  }
})

export default ArticleBody