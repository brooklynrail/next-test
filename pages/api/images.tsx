import sql from 'sql-template-strings'
import { query } from '../../lib/db'

export default async (req, res) => {
  const id = parseInt(req.query.id)

  const images = await query(sql`
    SELECT * FROM article_images
    WHERE article_id IN (
      SELECT * FROM (
        SELECT id FROM articles
        WHERE id = ${id}
        LIMIT 1
      ) AS t
    )
  `)

  res.status(200).json(images)
}