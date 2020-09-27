import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        // console.log(image)
        return (
            <div  key={image.id}>
                <img src={image.webFormatURL} alt="" />
            </div>
        )
    }) 
    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;