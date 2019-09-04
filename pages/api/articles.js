import sql from 'sql-template-strings'
import { query } from '../../lib/db'

export default async (req, res) => {
  const limit = parseInt(req.query.limit) || 10

  const articles = await query(sql`
    SELECT * FROM articles
    WHERE permalink IS NOT NULL
    ORDER BY created_at DESC
    LIMIT ${limit}
  `)

  res.status(200).json(articles)
}