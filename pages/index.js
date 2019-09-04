import fetch from 'isomorphic-unfetch'

const IndexPage = (props) => (
  <ul>
    {props.articles.map((article) => (
      <li key={article.id} dangerouslySetInnerHTML={{ __html: article.title }} />
    ))}
  </ul>
)

IndexPage.getInitialProps = async ({ req }) => {
  // TODO: Make protocol/host detection better
  const protocol = req ? 'http:' : location.protocol
  const host = req ? 'localhost:3000' : location.host
  const pageRequest = `${protocol}//${host}/api/articles?limit=20`

  const res = await fetch(pageRequest)
  const articles = await res.json()

  return { articles }
}

export default IndexPage