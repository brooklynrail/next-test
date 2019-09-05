import sql from 'sql-template-strings'
import { query } from '../../lib/db'

export default async (req, res) => {
  const permalink = req.query.permalink

  const article = await query(sql`
    SELECT * FROM articles
    WHERE permalink = ${permalink}
  `)

  res.status(200).json(article)
}