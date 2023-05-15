import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img4.jpg';
import img3 from '../assets/img/img5.jpg';
import img4 from '../assets/img/img6.jpg';
import img5 from '../assets/img/img7.jpg';
import img6 from '../assets/img/img8.jpg';
import img7 from '../assets/img/img9.jpg';
import img8 from '../assets/img/img10.jpg';

const Carousell = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [itemsPerRow, setItemsPerRow] = useState(4);

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  useEffect(() => {
    const updateItemsPerRow = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setItemsPerRow(1);
      } else if (width < 768) {
        setItemsPerRow(2);
      } else if (width < 992) {
        setItemsPerRow(3);
      } else {
        setItemsPerRow(4);
      }
    };

    updateItemsPerRow();
    window.addEventListener('resize', updateItemsPerRow);
    return () => window.removeEventListener('resize', updateItemsPerRow);
  }, []);

  const imageChunks = chunkArray([...images], itemsPerRow);

  const imgStyle = {
    maxHeight: '500px',
    width: '100%',
    objectFit: 'cover',
  };

  const columnStyle = {
    padding: 0,
  };

  return (
    <Carousel>
      {imageChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="container-fluid">
            <div className="row">
              {chunk.map((img, i) => (
                <div className={`col-${12 / itemsPerRow}`} style={columnStyle} key={i}>
                  <img src={img} className="d-block w-100" style={imgStyle} alt={`img${i}`} />
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousell;
