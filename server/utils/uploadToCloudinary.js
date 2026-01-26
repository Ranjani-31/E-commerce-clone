const cloudinary = require('../config/cloudinary')

const uploadToCloudinary = async (buffer)=>{

    return new Promise((resolve, reject)=>{
        cloudinary.uploader.upload_stream(
            {
                folder: "products",
                resource_type: "image"
            },
            (error, result)=>{
                if (error) reject(error)
                resolve(result)
            }
        ).end(buffer)
    })

}

module.exports = uploadToCloudinary