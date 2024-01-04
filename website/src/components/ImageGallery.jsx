import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };


const ImageGallery = ({ images }) => {

    return (

        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry columnsCount={3} gutter="4">
                {images.map((image) => (
                    <img key={image.src} className='grayscale hover:grayscale-0' src={image.src} style={{ width: "100%", display: "block" }} />
                ))}
            </Masonry>
        </ResponsiveMasonry>

    );
};

export default ImageGallery;
