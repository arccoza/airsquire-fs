import store from '../../lib/store.js'


export default async function images(req, res) {
  if (req.method == 'GET')
    return getImages(req, res)
  else if (req.method == 'PUT')
    return putImages(req, res)
  return Promise.resolve(res.status(405).json({}))
}

async function getImages(req, res) {
  console.log(req.query)
  var p = new Promise((resolve, reject) => {
    const stream = store.listObjectsV2('airsquire', `images/${req.query.q}`, true, req.query.s)
    // stream.on('error', function(err) { console.log(err), reject(err) } )
    stream.on('readable', () => {
      let item, items = []
      while (item = stream.read()) {
        items.push(item)
      }
      resolve(items)
    })
  })
  return p.then(ls => res.json(ls)).catch(err => res.json(err))
}

async function putImages(req, res) {
  try {
    req.body
  } catch (error) {
    return Promise.resolve(res.status(400).json({ error: 'Bad json data' }))
  }

  return store.presignedPutObject('airsquire', `images/${req.body.name}`)
    .then(url => res.json({url})).catch(err => res.json(err))
}
