import { Button } from "react-bootstrap";
//Ya esta resposivo
//igual aca lo alto no me da y margen 

function Home() {
    return ( 
        <>
        <div className="bg-info w-100">
            <div className="h-full text-center container bg-secondary">
                <div className="row row-cols-1 row-cols-sm-4 row-cols-md-12">
                <div className="col-md-6 col-sm-2 align-self-center">
                    <h1>Obten tu ficha</h1>
                    <Button>FICHA</Button>
                </div>
                <div className="col-md-5 col-sm-2 align-self-center bg-primary ">
                    imagen
                </div>
            </div>
           </div>
            <h1>EVENTOS</h1>
            
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                     <div className="carousel-item active">
                     <div className="container">
                         <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                                <div className="col-md-3 col-sm-1 bg-primary">
                                <h1>foto</h1>
                                 </div>
                                <div className="col-md-3 col-sm-1 bg-warning">
                                    <h1>foto</h1>
                                </div>
                                <div className="col-md-3 col-sm-1 bg-danger">
                                    <h1>foto</h1>
                                </div>
                                <div className="col-md-3 col-sm-1 bg-primary">
                                    <h1>foto</h1>
                                </div>
                         </div>
                     </div>
                    </div>
                    <div className="carousel-item">
                    <div className="container">
                         <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                                <div className="col-md-3 col-sm-1 bg-primary">
                                <h1>foto</h1>
                                 </div>
                                <div className="col-md-3 col-sm-1 bg-warning">
                                    <h1>foto</h1>
                                </div>
                                <div className="col-md-3 col-sm-1 bg-danger">
                                    <h1>foto</h1>
                                </div>
                                <div className="col-md-3 col-sm-1 bg-primary">
                                    <h1>foto</h1>
                                </div>
                         </div>
                     </div>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <svg xmlns="http://www.w3.org/2000/svg" className="carousel-control-prev-icon"  aria-hidden="true" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <svg xmlns="http://www.w3.org/2000/svg" className="carousel-control-next-icon" aria-hidden="true" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="h-full text-center container bg-secondary">
                <div className="row row-cols-1 row-cols-sm-4 row-cols-md-12">
                <div className="col-md-6 col-sm-2 align-self-center">
                    <p>hdudbqdbwqjdbwejbdwehb</p>
                    <h2>Import from A</h2>
                    <Button>TESTIMONIOS</Button>
                </div>
                <div className="col-md-6 col-sm-2 align-self-center bg-primary ">
                    imagen
                </div>
            </div>
           </div>

           <h1>ALIADOS</h1>
           <div className="h-full text-center container bg-secondary">
                <div className="row row-cols-1 row-cols-sm-4 row-cols-md-12">
                <div className="col-md-6 col-sm-2 align-self-center">
                    imagen
                    <h4>Descripcion</h4>
                </div>
                <div className="col-md-6 col-sm-2 align-self-center bg-primary ">
                    imagen
                    <h4>Descripcion</h4>
                </div>
            </div>
           </div>
        </div>

        </>
     );
}

export default Home;