import React, { useState } from 'react';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section className='productimages'>
      <img src={main.url} alt='main' className='productimages__main' />
      <div className='productimages__gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${
                image.url === main.url ? 'productimages__active' : null
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
