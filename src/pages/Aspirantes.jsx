//poner el texto justificado del parrafo perfil ingreso
//carucel no funciona jajaj no sa vuelta si lo plasto y tambien el acordion
//las imagnes estan responsiva
//lo que me falta resposivo son los card 
import Img1 from '../assets/img/img3.jpg';
import Img2 from '../assets/img/img2.jpg'
import { Button } from 'react-bootstrap';
import CardC from '../components/CarouselCard';
import Accordion from '../components/Accordion';
function Aspirante() {
    return (
        <>
            <div className='carousel'>
                <div className="container">
                    <div className="row row-col-1 row-cols-sm-4 row-cols-md-12">
                        <div className="col-md-5 col-sm-2">
                            <img src={Img1} className='rounded float-start w-md-100 h-sm-500 w-sm-50 img-fluid' height={800}></img>
                        </div>
                        <div className="col-md-7 col-sm-2">
                            <h1 className='m-4'>PERFIL DE INGRESO</h1>
                            <p className='text-right'>Para ingenierías el aspirante deberá tener las habilidades en las áreas de pensamiento matemático y analítico, estructura de la lengua y
                                comprensión lectora; así también contar con las competencias básicas de matemáticas, física, inglés y lenguaje escrito.
                                Para ingreso a licenciatura, el aspirante deberá tener las habilidades en las áreas de Economía-Administración, Estadística,
                                inglés, pensamiento crítico, estructura de la lengua y comprensión lectora.</p>
                            <Accordion></Accordion>
                        </div>
                        
                    </div>
                    <br></br>
                    <br></br>
                    <div className="h-full text-center container bg-blue">
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
                    <CardC></CardC>
            </div>
            </div> 
        </>
    )
}

export default Aspirante;
