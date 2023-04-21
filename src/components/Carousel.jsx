import img from '../assets/img/img2.jpg'
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img4.jpg'
import img3 from '../assets/img/img5.jpg'
import img4 from '../assets/img/img6.jpg'
import img5 from '../assets/img/img7.jpg'
import img6 from '../assets/img/img8.jpg'
import img7 from '../assets/img/img9.jpg'
import img8 from '../assets/img/img10.jpg'

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carousell() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="container">
                    <div className="row">
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img4}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img5}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="container">
                    <div className="row">
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img6}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img7}
                                alt="First slide"
                            />
                        </div>
                        <div className="col">
                            <img
                                className="d-block w-100"
                                src={img8}
                                alt="First slide"
                            />
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

    );
}



export default Carousell;