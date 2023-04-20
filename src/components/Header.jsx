//ya esta resposivo, solo que en cuando se hace chico aun no se elimina y se pone el icono
//esta tambien el fooder lo comentado, igual al hacer sm no se porque no me funciona
function Header() {
    return ( 
        <>
       <header className="bg-success text-dark w-full h-50">
        <div className="container">
                <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                    <div className="col-md-5 col-sm-2">
                       <h4>logo</h4>
                    </div>
                    <div className="col-md-2 col-sm-0">
                    <button type="button" class="btn">BOLSA DE  EGRESO</button>
                    </div>
                    <div className="col-md-2 col-sm-0">
                    <button type="button" class="btn">ASPIRANTE</button>
                    </div>
                    <div className="col-md-2 col-sm-0">
                    <button type="button" class="btn">PROCEDIMIENTOS</button>
                    </div>
             </div>
        </div>
        </header>

        {/*<div className="container">
                <div className="row  row-cols-1 row-cols-sm-4 row-cols-md-12">
                    <div className="col-md-4 col-sm-1">
                       <p>Dirección</p> 
                    </div>
                    <div className="col-md-2 col-sm-1">
                       <p> Acerca de nosotros </p>
                    </div>
                    <div className="col-md-3 col-sm-1">
                       <p> icono de chiapas</p>
                    </div>
                    <div className="col-md-1 col-sm-1">
                       <p> redes y el otro logo</p>
                    </div>
                </div>
        </div> */}
        </>
     );
}

export default Header;