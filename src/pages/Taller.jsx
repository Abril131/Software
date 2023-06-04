import img from '../assets/img/img6.jpg'
function Taller() {
    return ( 
        <>
        <h1 className="m-4">TALLERES</h1>
        <p>Mediante este apartado brindaremos taller, son realizados tanto como docentes, como alumnos de la 
            institución, que tiene como objetivo apoyar a los estudiantes o personas que están interesadas en la carrera de Software.</p>
        <div className= "container">
         <div className='bg-primary'><h4>Front-end</h4></div>   
         <div className="row row-cols-1 row-cols-sm-4 row-cols-md-12">
         
         <div className='col-md-4 col-sm-2 mt-3'>
         <figure class="figure">
            <img src={img} class="figure-img img-fluid rounded" alt="..."></img>
            <figcaption>Descripción del taller</figcaption>
        </figure>
         </div>
         <div className='col-md-4 col-sm-2 mt-3'>
         <figure class="figure">
            <img src={img} class="figure-img img-fluid rounded" alt="..."></img>
            <figcaption>Descripción del taller</figcaption>
        </figure>
         </div>
         <div className='col-md-4 col-sm-0 mt-3'>
         <figure class="figure">
            <img src={img} class="figure-img img-fluid rounded" alt="..."></img>
            <figcaption>Descripción del taller</figcaption>
        </figure>
         </div>
        </div>       
        <div className='bg-primary'><h4>Back-end</h4></div>
        <div className="row row-cols-1 row-cols-sm-4 row-cols-md-12">
         <div className='col-md-4 col-sm-2 mt-3'>
         <figure class="figure">
            <img src={img} class="figure-img img-fluid rounded" alt="..."></img>
            <figcaption>Descripción del taller</figcaption>
        </figure>
         </div>
         <div className='col-md-4 col-sm-2 mt-3'>
         <figure class="figure">
            <img src={img} class="figure-img img-fluid rounded" alt="..."></img>
            <figcaption>Descripción del taller</figcaption>
        </figure>
         </div>
         <div className='col-md-4 col-sm-0 mt-3'>
         <figure class="figure">
            <img src={img} class="figure-img img-fluid rounded" alt="..."></img>
            <figcaption>Descripción del taller</figcaption>  
        </figure>
         </div>  
        </div>     
        </div>
        
        
        </>
     );
}

export default Taller;