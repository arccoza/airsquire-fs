const Minio = require('minio')


// const store = new Minio.Client({
//     endPoint: 's3.us-west-002.backblazeb2.com',
//     useSSL: true,
//     accessKey: '',
//     secretKey: '',
// })

const store = new Minio.Client({
    endPoint: 's3.us-east-1.amazonaws.com',
    useSSL: true,
    accessKey: '',
    secretKey: '',
})

export default store
