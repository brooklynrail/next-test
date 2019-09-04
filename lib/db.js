import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: 'localhost',
    port: 3307,
    database: 'brooklynrail',
    user: 'brooklynrail',
    password: 'devpass'
  }
})

export const query = async (query) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error: error.message }
  }
}