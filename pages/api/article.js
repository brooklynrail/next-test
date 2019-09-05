import sql from 'sql-template-strings'
import { query } from '../../lib/db'

export default async (req, res) => {
  const permalink = req.query.permalink

  const article = await query(sql`
    SELECT * FROM articles
    WHERE permalink = ${permalink}
  `)
  const images = await query(sql`
    SELECT * FROM article_images
    WHERE article_id = ${article[0] && article[0].id}
  `)

  res.status(200).json({ article: article[0], images })
}