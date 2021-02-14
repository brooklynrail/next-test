import fetch from 'isomorphic-unfetch'
import parseArticleBody from '../lib/parseArticleBody'
import getApiUrl from '../lib/getApiUrl'
import ArticleBody from '../components/ArticleBody'

const IndexPage = (props) => (<>
  <h1 dangerouslySetInnerHTML={{ __html: props.article.title }} />
  {props.article.deck ? <h2 dangerouslySetInnerHTML={{ __html: props.article.deck }} /> : null}
  <ArticleBody ast={props.parsed} images={props.images} />
</>)

IndexPage.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`${getApiUrl(req)}/article?permalink=${query.permalink}`)
  const { article, images } = await res.json()

  const parsed = parseArticleBody(article.body)

  return { article, images, parsed }
}

export default IndexPage