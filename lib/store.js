const Minio = require('minio')


// const store = new Minio.Client({
//     endPoint: 's3.us-west-002.backblazeb2.com',
//     useSSL: true,
//     accessKey: '00201c79f11724b0000000007',
//     secretKey: 'K002M4eZkF6zNh24RGVj7V2TpnHVguE',
// })

const store = new Minio.Client({
    endPoint: process.env.S3_END_POINT,
    useSSL: true,
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
})

export default store
