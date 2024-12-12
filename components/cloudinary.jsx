import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

(async function uploadImages() {
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET,
    });

    const publicFolderPath = path.join(__dirname, 'public');

    fs.readdir(publicFolderPath, async (err, files) => {
        if(err) {
            console.error('Error reading directory:', err);
            return;
        }

        for (const file of files) {
            const filePath = path.join(publicFolderPath, file);

            try {
                const uploadResult = await cloudinary.uploader.upload(filePath, {
                    public_id: path.parse(file).name
                });
                console.log('Uploaded:', uploadResult);
            } catch (error) {
                console.error('Error uploading file:', file, error);
            }
        }
    })

})

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET,
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();