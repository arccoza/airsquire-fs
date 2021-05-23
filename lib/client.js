import { urlPrefix, bucketName } from './store-vars'


export default {
  upload(image) {
    return fetch('/api/images/', presignedUrl(image.name))
    .then(v => v.json())
    .then(({ url }) => {
      console.log(url)
      return readFile(image).then(file => fetch(url, presignedUpload(file)))
    })
  },

  get(id) {

  },

  list() {

  },

  search(query='', from='') {
    return fetch(`/api/images/?q=${query}&s=${from}`)
    .then(res => res.json())
    .then(ls => {
      return ls.filter(o => !o.name.includes('.bzEmpty')).map(o => (o.url = urlPrefix + o.name, o))
    })
  },
}

// Helper functions
function presignedUrl(name) {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({name})
  }
}

function presignedUpload(file) {
  return {
    headers: {
      "Content-Type": file.type,
    },
    method: 'PUT',
    body: file,
  }
}

async function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onabort = () => reject()
    reader.onerror = () => reject()
    reader.onload = () => resolve(reader.result)

    reader.readAsArrayBuffer(file)
  })
}
