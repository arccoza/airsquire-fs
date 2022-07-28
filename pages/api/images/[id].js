import store from '../../../lib/store.js'


export default async function images(req, res) {
  console.log(req.query)

  if (req.method != 'GET')
    return Promise.resolve(res.status(405).json({}))

  return store.listBuckets().then(ls => res.json(ls)).catch(err => res.json(err))
}
