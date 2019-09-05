import fetch from 'isomorphic-unfetch'
import getApiUrl from '../lib/getApiUrl'

const IndexPage = (props) => (
  <ul>
    {props.articles.map((article) => (
      <li key={article.id}>
        <a
          href={`/${article.permalink}`}
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
      </li>
    ))}
  </ul>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch(`${getApiUrl(req)}/articles`)
  const articles = await res.json()

  return { articles }
}

export default IndexPage