import fetch from 'isomorphic-unfetch'
import parseArticleBody from '../lib/parseArticleBody'
import getApiUrl from '../lib/getApiUrl'
import ArticleBody from '../components/ArticleBody'

const IndexPage = (props) => (<>
  <h1 dangerouslySetInnerHTML={{ __html: props.article.title }} />
  <ArticleBody ast={props.parsed} />
</>)

IndexPage.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`${getApiUrl(req)}/article?permalink=${query.permalink}`)
  const json = await res.json()
  const article = json[0]

  const parsed = parseArticleBody(article.body)

  return { article, parsed }
}

export default IndexPage