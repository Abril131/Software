import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
function CardC() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div class="container">
                        <div class="row">
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 1</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés I</li>
                                                <li>Química básica</li>
                                                <li>Algebra lineal</li>
                                                <li>Fundamentos de computación</li>
                                                <li>Algoritmos</li>
                                                <li>Matemáticas discretas</li>
                                                <li>Expresión oral y escrita I</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 2</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés II</li>
                                                <li>Desarrollo humano y valores</li>
                                                <li>Cálculo diferencial</li>
                                                <li>Programación orientada a objetos</li>
                                                <li>Estructuras de datos</li>
                                                <li>Ingeniería de software asistida por computadora</li>
                                                <li>Procesos de desarrollo de software</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 3</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés III</li>
                                                <li>Inteligencia emocional y manejo de conflictos</li>
                                                <li>Cálculo integral</li>
                                                <li>Programación visual</li>
                                                <li>Estructuras de datos avanzadas</li>
                                                <li>Fundamentos de bases de datos</li>
                                                <li>Ingeniería de requerimientos de software</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 4</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés V</li>
                                                <li>Habilidades cognitivas y creatividad</li>
                                                <li>Matemáticas para ingeniería I</li>
                                                <li>Programación Web</li>
                                                <li>Diseño de interfaces</li>
                                                <li>Bases de datos</li>
                                                <li>Electricidad y magnetismo</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 5</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés V</li>
                                                <li>Ética profesional</li>
                                                <li>Matemáticas para ingeniería II</li>
                                                <li>Programación cliente/servidor</li>
                                                <li>Fundamentos de redes</li>
                                                <li>Arquitectura de software</li>
                                                <li>Sistemas digitales</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 6</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés VI</li>
                                                <li>Habilidades gerenciales</li>
                                                <li>Probabilidad y estadística</li>
                                                <li>Arquitectura de computadoras</li>
                                                <li>Redes</li>
                                                <li>Calidad del software</li>
                                                <li>Estancia I</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 7</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés VII</li>
                                                <li>Liderazgo de equipos de alto desempeño</li>
                                                <li>Lenguajes y autómatas</li>
                                                <li>Sistemas operativos</li>
                                                <li>Programación concurrente</li>
                                                <li>Pruebas del software</li>
                                                <li>Estancia II</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 8</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés VIII</li>
                                                <li>Programación para móviles I</li>
                                                <li>Compiladores e intérpretes</li>
                                                <li>Inteligencia artificial</li>
                                                <li>Análisis financiero de software</li>
                                                <li>Mantenimiento de software</li>
                                                <li>Multimedia y diseño digital</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 9</Card.Title>
                                            <ul className="list-unstyled">
                                                <li>Inglés IX</li>
                                                <li>Programación para móviles II</li>
                                                <li>Administración de proyectos de software</li>
                                                <li>Minería de datos</li>
                                                <li>Arquitectura orientada a servicios</li>
                                                <li>Expresión oral y escrita II</li>
                                                <li>Seguridad de la información</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 40 <br></br>Horas 525</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="col">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>CUATRIMESTRE 10</Card.Title>
                                            <ul className="list-unstyled">
                                                <li className='align-item-center'>Estadía profesional</li>
                                            </ul>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Créditos 38 <br></br>Horas 600</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CardC;