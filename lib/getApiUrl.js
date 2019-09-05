export default (req) => {
  const protocol = req
    ? req.headers['x-forwarded-proto']
      ? `${req.headers['x-forwarded-proto']}:`
      : `http:`
  : location.protocol
  const host = req
    ? req.headers['x-forwarded-host']
      ? req.headers['x-forwarded-host']
      : req.headers['host']
    : location.host

  return `${protocol}//${host}/api`
}