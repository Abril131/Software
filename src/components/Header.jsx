import '../styles/header.css';
import { Link } from 'react-router-dom';

import React from 'react';

function Header(){
    return(
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <Link to="/">
          <img className="navbar-brand" src="images/up.png" width="140px" />
        </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
      <center><div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <b>
              <li className="nav-item">
                <Link className="nav-link" to="/bolsa">
                  Bolsa de egreso
                </Link>
              </li>
            </b>
            <b>
              <li className="nav-item">
                <Link className="nav-link" to="/aspirante">
                  Aspirante
                </Link>
              </li>
            </b>
            <b>
              <li className="nav-item">
                <Link className="nav-link" to="/procedimiento">
                  Procedimiento
                </Link>
              </li>
            </b>
            <b>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonio">
                  Testimonio
                </Link>
              </li>
            </b>
        </ul>
      </div></center>
    </div>
  </nav>
  )
  }

  export default Header

// //ya esta resposivo, solo que en cuando se hace chico aun no se elimina y se pone el icono
// //esta tambien el fooder lo comentado, igual al hacer sm no se porque no me funciona
// function Header() {
//     return ( 
//         <>
//        <header className="bg-success text-dark w-full h-50">
//         <div className="container">
//                 <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
//                     <div className="col-md-5 col-sm-2">
//                        <h4>logo</h4>
//                     </div>
//                     <div className="col-md-2 col-sm-0">
//                     <button type="button" class="btn">BOLSA DE  EGRESO</button>
//                     </div>
//                     <div className="col-md-2 col-sm-0">
//                     <button type="button" class="btn">ASPIRANTE</button>
//                     </div>
//                     <div className="col-md-2 col-sm-0">
//                     <button type="button" class="btn">PROCEDIMIENTOS</button>
//                     </div>
//              </div>
//         </div>
//         </header>

//         {/*<div className="container">
//                 <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
//                     <div className="col-md-4 col-sm-1">
//                        <p>Dirección</p> 
//                     </div>
//                     <div className="col-md-2 col-sm-1">
//                        <p> Acerca de nosotros </p>
//                     </div>
//                     <div className="col-md-3 col-sm-1">
//                        <p> icono de chiapas</p>
//                     </div>
//                     <div className="col-md-1 col-sm-1">
//                        <p> redes y el otro logo</p>
//                     </div>
//                 </div>
//         </div> */}
//         </>
//      );
// }

// export default Header;