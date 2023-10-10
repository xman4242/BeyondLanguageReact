import React from 'react';

function ImageGallery() {
  const imageFolder = '/assets'; // The relative path to your images folder
  const images = require.context('public/assets', true);
  const imageKeys = images.keys();

  return (
    <div>
      {imageKeys.map((key) => {
        const image = images(key);
        const title = key.replace(/^.*[\\/]/, '').split('.').slice(0, -1).join('.');
        const imagePath = `${imageFolder}/${key.replace('./', '')}`; // Manually construct the path
        return (
          <div key={key}>
            <img src={imagePath} alt={title} />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ImageGallery;