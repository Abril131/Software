

function BolsaT() {
    //function mostrar(){
    //document.getElementById('F') = 'block';}
    

function a() {
  const boton = document.getElementById('bFront');
const div = document.getElementById('Front');
    div.classList.remove('hide');
    div.classList.add('show');
  }
  

    return (
        <>
            <div>
                <div className="container">
                    <h1 className="m-4">BOLSA DE TRABAJO</h1>
                    <div className="row">
                        <div className="col-sm-3 col-md-5 text-left m-2">
                            <h3>Selecciona en la área que desea trabajar</h3>
                            <button id="bFront" onClick={a()} type='button' className="w-100 btn btn-primary" data-toggle="collapse" data-target='#Front'>Front-end <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                            </svg></button>
                            <button type='button' className="w-100 btn btn-primary" data-toggle="collapse" data-target='#Back'>Back-end <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                                <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z" />
                            </svg> </button>

                        </div>
                        <div className="col-md-6 col-sm-4 collapse" id='Front'>
                            se van a mostrar los trabajos Front-end
                        </div>
                        <div className="col-md-6 col-sm-4 collapse" id='Back'>
                            se van a mostrar los trabajos Back-end
                        </div>
                    </div>
                    <h1 className="m-4">Personalisa tu bolsa de trabajo</h1>
                    <div className="row row-cols-md-12 row-cols-sm-4">
                        <div className="col-md-5 col-sm-4">
                            <h4 className='text-left m-3'>Selecciona el área de trabajo:</h4>
                            <select className="form-select" aria-label="Default">
                                <option value>Selecciona el área</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <h4 className='text-left m-3'>Selecciona el lugar donde desea trabajar:</h4>
                            <select className="form-select" aria-label="Default">
                                <option value>Selecciona el área</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div>
                                <button className='m-5 rounded-2'>VER MAPA</button>
                            </div>

                        </div>
                        <div className="col-md-6 col-sm-4 bg-primary">
                            aca va el mapa
                        </div>
                    </div>
                    <div>
                        <button className=' m-5 rounded-2'>VER MÁS</button>
                    </div>
                    <div></div>{/*este seria para mostrar el ver más*/}
                </div>

            </div>
        </>
    );
}

export default BolsaT;