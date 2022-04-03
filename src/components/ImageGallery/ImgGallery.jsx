import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


function ImgGallery({ project, image }) {


    const imgFunction = () => {
        const images = []
        for (let i = 1; i < project[0].images.length; i++) {
            images.push({
                original: project[0].images[i],
                thumbnail: project[0].images[i]
            })
        }
        return images
    }

    const img = [{
        original: project[0].images[0],
        thumbnail: project[0].images[0]
    }
    ].concat(imgFunction());

    return (
        <ImageGallery items={img} />)
}

export default ImgGallery