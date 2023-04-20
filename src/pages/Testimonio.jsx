import img from '../assets/img/img3.jpg'
import img2 from '../assets/img/img1.jpg'
function Testimonio() {
    return (
        <>
            <div>
                <div className="container">
                    <div class="row row-cols-1 row-cols-md-12 g-4">
                        <div class="col-md-4">
                            <div class="card">
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Testimonio</p>
                                    <h4 class="card-title">Import from a</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card">
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                <p class="card-text">Testimonio</p>
                                <h4 class="card-title">Import from a</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card">
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                <p class="card-text">Testimonio</p>
                                <h4 class="card-title">Import from a</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row row-col-1 row-cols-md-12 row-cols-sm-4'>
                        <div className='col-md-6 col-sm-2'>
                            <div class="card mb-3 max-width: 540px; my-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={img2} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                        <h3 class="card-title">Import from a</h3>
                                        <p class="card-text">Testimonio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-2'>
                            <div class="card mb-3 max-width: 540px; my-5">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={img2} class="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title">Import from a</h3>
                                             <p class="card-text">Testimonio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Testimonio;