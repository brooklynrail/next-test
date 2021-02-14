import fetch from 'isomorphic-unfetch'
import getApiUrl from '../lib/getApiUrl'
import ArticleExcerpt from '../components/ArticleExcerpt'

const IndexPage = (props) => (<>
  <h1>Brooklyn Rail</h1>
  <ul>
    {props.articles.map((article) => (
      <li key={article.id}>
        <h2>
          <a
            href={`/${article.permalink}`}
            dangerouslySetInnerHTML={{ __html: article.title }}
          />
        </h2>
        <ArticleExcerpt content={article.excerpt} />
      </li>
    ))}
  </ul>
</>)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch(`${getApiUrl(req)}/articles`)
  const articles = await res.json()

  return { articles }
}

export default IndexPage
