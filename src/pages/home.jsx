import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import Galeria from '../components/Galeria';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['images/img1.jpg', 'images/img2.jpg']; // Array de imágenes

  useEffect(() => {
    // Cambiar la imagen cada 3 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      // Limpiar el intervalo al desmontar el componente
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="home">
      {/* <section className="section1"> */}
  <div className="carousel">
    <img src={images[currentImageIndex]} alt="Imagen del carrusel" className="carousel-image" />
  </div>
{/* </section> */}

        <section className="section3">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <img src="images/img11.png" className="img-fluid" alt="Imagen de la sección 3" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h2 className="text-white">Título</h2>
                <p className="text-custom">Texto</p>
                <button className="btn btn-light">Botón</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="section4-content">
            <center>
              <h2 className="section2-title">ALIADOS</h2>
            </center>
            <Galeria />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
