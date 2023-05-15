import React from 'react';

const Galeria = () => {
  const images = [
    'images/aliado1.png',
    'images/aliado2.png',
    'images/aliado1.png',
    'images/aliado2.png',
    'images/aliado1.png',
    'images/aliado2.png',
    'images/aliado1.png',
    'images/aliado2.png'
    // Agrega más imágenes de aliados aquí
  ];

  return (
    <div className="row">
      {images.map((img, i) => (
        <div className="col-md-4 col-lg-3" key={i}>
          <img src={img} className="img-fluid mb-4 galeria-img" alt={`aliado${i}`} />
        </div>
      ))}
    </div>
  );
};

export default Galeria;
