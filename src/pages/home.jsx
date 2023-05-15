import React from 'react';
import '../styles/home.css';
import Carousel from '../components/Carousel';
import Galeria from '../components/Galeria';
import CardC from "../components/CarouselCard";

const Home = () => {
  return (
    <>
    <div className="home">
      <section className="section1">
        <div className="content">
          <h1>Obtén tu ficha Ahora</h1>
          <button>Ficha</button>
        </div>
        <div className="image">
          <img src="images/img2.jpg" />
        </div>
      </section>
          <section className="section2">
          <div className="section2-content">
            <h2 className="section2-title">EVENTOS</h2>
            
          </div>
        </section>
        <Carousel></Carousel>
        <br/>
        <br/>
        <section className="section3">
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div className="col-lg-6 d-flex flex-column justify-content-center">
        <center><h2 className="text-white">Título</h2>
        <p className="text-custom">Texto</p></center>
        <button className="btn btn-light">Botón</button>
      </div>
      <div className="col-lg-6 d-flex justify-content-end align-items-center">
        <img src="images/img11.png" className="img-fluid" />
      </div>
    </div>
  </div>
</section>
        <section className="section4">
        <div className="section4-content">
            <center><h2 className="section2-title">ALIADOS</h2></center>
            <Galeria />
            </div>
        </section>
      </div>
      </>
  );
};

export default Home;
