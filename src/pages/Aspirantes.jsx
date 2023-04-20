//poner el texto justificado del parrafo perfil ingreso
//carucel no funciona jajaj no sa vuelta si lo plasto y tambien el acordion
//las imagnes estan responsiva
//lo que me falta resposivo son los card 
import Img1 from '../assets/img/img3.jpg';
import Img2 from '../assets/img/img2.jpg'
import { Button } from 'react-bootstrap';
function Aspirante() {
    return (
        <>
            <div>
                <div className="container">
                    <div className="row row-col-1 row-cols-sm-4 row-cols-md-12">
                        <div className="col-md-5 col-sm-4">
                            <img src={Img1} className='rounded float-start w-md-100 h-sm-500 w-sm-50 img-fluid' height={800}></img>
                        </div>
                        <div className="col-md-7 col-sm-4">
                            <h1 className='m-4'>PERFIL DE INGRESO</h1>
                            <p className='text-right'>Para ingenierías el aspirante deberá tener las habilidades en las áreas de pensamiento matemático y analítico, estructura de la lengua y
                                comprensión lectora; así también contar con las competencias básicas de matemáticas, física, inglés y lenguaje escrito.
                                Para ingreso a licenciatura, el aspirante deberá tener las habilidades en las áreas de Economía-Administración, Estadística,
                                inglés, pensamiento crítico, estructura de la lengua y comprensión lectora.</p>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            PERFIL DE EGRESO
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            El ingeniero en Desarrollo de Software tiene la capacidad de diseñar y desarrollar software de calidad, gestionar, administrar e implantar proyectos, así como desarrollar
                                            investigación en el campo de las tecnologías de información así como planear soluciones de tecnologías de información para automatizar y optimizar procesos de las empresas
                                            mediante proyectos de software.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            VALORES
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>d</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            COMPETENCIAS
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            PERFIL LABORAL
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br></br>
                    <br></br>
                    <div className="h-full text-center container bg-secondary">
                        <div className="row row-cols-sm-4 row-cols-md-12">
                            <div className="col-md-6 col-sm-2 align-self-center">
                                <h1 className='m-5'>Obten tu ficha</h1>
                                <Button>FICHA</Button>
                            </div>
                            <div className="col-md-5 col-sm-2 align-self-center ">
                                <img src={Img2} className='rounded float-start w-100  m-5 img-fluid d-block mx-auto' height={350}></img>
                            </div>
                        </div>
                    </div>
                    <h1 className='m-5'>PLAN DE ESTUDIO</h1>
                    <div id="carouselExample" className="carousel slide m-5">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row  row-cols-sm-4 row-cols-md-12 g-4">
                                        <div className="col-md-6 col-sm-2">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 1</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés I</li>
                                                        <li>Química básica</li>
                                                        <li>Algebra lineal</li>
                                                        <li>Fundamentos de computación</li>
                                                        <li>Algoritmos</li>
                                                        <li>Matemáticas discretas</li>
                                                        <li>Expresión oral y escrita I</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 2</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés II</li>
                                                        <li>Desarrollo humano y valores</li>
                                                        <li>Cálculo diferencial</li>
                                                        <li>Programación orientada a objetos</li>
                                                        <li>Estructuras de datos</li>
                                                        <li>Ingeniería de software asistida por computadora</li>
                                                        <li>Procesos de desarrollo de software</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 3</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés III</li>
                                                        <li>Inteligencia emocional y manejo de conflictos</li>
                                                        <li>Cálculo integral</li>
                                                        <li>Programación visual</li>
                                                        <li>Estructuras de datos avanzadas</li>
                                                        <li>Fundamentos de bases de datos</li>
                                                        <li>Ingeniería de requerimientos de software</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 4</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés V</li>
                                                        <li>Habilidades cognitivas y creatividad</li>
                                                        <li>Matemáticas para ingeniería I</li>
                                                        <li>Programación Web</li>
                                                        <li>Diseño de interfaces</li>
                                                        <li>Bases de datos</li>
                                                        <li>Electricidad y magnetismo</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 5</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés V</li>
                                                        <li>Ética profesional</li>
                                                        <li>Matemáticas para ingeniería II</li>
                                                        <li>Programación cliente/servidor</li>
                                                        <li>Fundamentos de redes</li>
                                                        <li>Arquitectura de software</li>
                                                        <li>Sistemas digitales</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 6</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés VI</li>
                                                        <li>Habilidades gerenciales</li>
                                                        <li>Probabilidad y estadística</li>
                                                        <li>Arquitectura de computadoras</li>
                                                        <li>Redes</li>
                                                        <li>Calidad del software</li>
                                                        <li>Estancia I</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                        </div></div>
                                        </div>
                                <div className="carousel-item ">
                                  <div className="container">
                                    <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 7</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés VII</li>
                                                        <li>Liderazgo de equipos de alto desempeño</li>
                                                        <li>Lenguajes y autómatas</li>
                                                        <li>Sistemas operativos</li>
                                                        <li>Programación concurrente</li>
                                                        <li>Pruebas del software</li>
                                                        <li>Estancia II</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 8</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés VIII</li>
                                                        <li>Programación para móviles I</li>
                                                        <li>Compiladores e intérpretes</li>
                                                        <li>Inteligencia artificial</li>
                                                        <li>Análisis financiero de software</li>
                                                        <li>Mantenimiento de software</li>
                                                        <li>Multimedia y diseño digital</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                            </div></div>
                                        </div>
                                        <div className="carousel-item">
                                       <div className="container">
                                    <   div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 9</h3>    
                                                    <ul className="list-unstyled">
                                                        <li>Inglés IX</li>
                                                        <li>Programación para móviles II</li>
                                                        <li>Administración de proyectos de software</li>
                                                        <li>Minería de datos</li>
                                                        <li>Arquitectura orientada a servicios</li>
                                                        <li>Expresión oral y escrita II</li>
                                                        <li>Seguridad de la información</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 40 <br></br>Horas 525</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-2">
                                        <div class="card h-100">
                                                <div class="card-body">
                                                    <h3 class="card-title">CUATRIMESTRE 10</h3>    
                                                    <ul className="list-unstyled">
                                                        <li className='align-item-center'>Estadía profesional</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <small class="text-body-secondary">Créditos 38 <br></br>Horas 600</small>
                                                </div>
                                            </div>
                                        </div>
                                            </div></div>
                                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="carousel-control-prev-icon" aria-hidden="true" width="40" height="40" fill="darkColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" className="carousel-control-next-icon" aria-hidden="true" width="40" height="40" fill="darkColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Aspirante;
