import fetch from 'isomorphic-unfetch'
import parseArticleBody from '../lib/parseArticleBody'
import ArticleBody from '../components/ArticleBody'

const IndexPage = (props) => (<>
  <h1 dangerouslySetInnerHTML={{ __html: props.article.title }} />
  <ArticleBody ast={props.parsed} />
</>)

IndexPage.getInitialProps = async ({ req, query }) => {
  // TODO: Make protocol/host detection better
  const protocol = req ? 'http:' : location.protocol
  const host = req ? 'localhost:3000' : location.host
  const pageRequest = `${protocol}//${host}/api/article?permalink=${query.permalink}`

  const res = await fetch(pageRequest)
  const json = await res.json()
  const article = json[0]

  const parsed = parseArticleBody(article.body)

  return { article, parsed }
}

export default IndexPage