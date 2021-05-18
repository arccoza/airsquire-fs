const Minio = require('minio')


const store = new Minio.Client({
    endPoint: 's3.us-west-002.backblazeb2.com',
    useSSL: true,
    accessKey: '',
    secretKey: '',
})

export default store
