import React, { useState } from 'react';

function Bolsa() {
  const [frontendJobs, setFrontendJobs] = useState([]);
  const [backendJobs, setBackendJobs] = useState([]);

  function showFrontendJobs() {
    const exampleFrontendJobs = [
      'Frontend Job 1',
      'Frontend Job 2',
      'Frontend Job 3',
    ];
    setFrontendJobs(exampleFrontendJobs);
    setBackendJobs([]);
  }

  function showBackendJobs() {
    const exampleBackendJobs = ['Backend Job 1', 'Backend Job 2', 'Backend Job 3'];
    setBackendJobs(exampleBackendJobs);
    setFrontendJobs([]);
  }

  return (
    <>
      <div>
        <div className="container">
          <h1 className="m-4">BOLSA DE TRABAJO</h1>
          <div className="row">
            <div className="col-sm-3 col-md-5 text-left m-2">
              <h3>Selecciona en la área que desea trabajar</h3>
              <button
                onClick={showFrontendJobs}
                type="button"
                className="w-100 btn btn-primary"
              >
                Front-end
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-html" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                </svg>
              </button>
              <button
                onClick={showBackendJobs}
                type="button"
                className="w-100 btn btn-primary"
              >
                Back-end
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-database" viewBox="0 0 16 16">
                <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.58 13 4v7c0 .42-.356.875-.818 1.312C11.766 13.73 10.464 14 8 14s-3.766-.27-4.182-.688C3.356 12.875 3 12.42 3 12V4c0-.42.356-.875.818-1.313C5.234 2.271 6.536 2 8 2zm1.173 9.212c.367.318.902.515 1.827.515s1.46-.197 1.827-.515C12.548 11.526 13 11.273 13 11V9.3c-.382.206-.84.4-1.363.562-.524.161-1.07.238-1.637.238-.567 0-1.113-.077-1.637-.238-.523-.162-.981-.356-1.363-.562v1.7c0 .273.452.526 1.173.912zm0-4c.367.318.902.515 1.827.515s1.46-.197 1.827-.515C12.548 7.526 13 7.273 13 7V5.3c-.382.206-.84.4-1.363.562-.524.161-1.07.238-1.637.238-.567 0-1.113-.077-1.637-.238-.523-.162-.981-.356-1.363-.562v1.7c0 .273.452.526 1.173.912zM4 4.242v6.516c0 .273.452.527 1.173.912.367.318.902.515 1.827.515s1.46-.197 1.827-.515c.721-.385 1.173-.639 1.173-.912V4.242C9.738 3.758 8.946 3.5 8 3.5c-.946 0-1.738.258-2.5.742zm5.5 5.25V5.5h-5v3.992h5z" />
                </svg>
              </button>
            </div>
            <div className="col-sm-8 col-md-6">
              <ul>
                {frontendJobs.map((job, index) => (
                  <li key={index}>{job}</li>
                ))}
                {backendJobs.map((job, index) => (
                  <li key={index}>{job}</li>
                ))}
              </ul>
            </div>
          </div>
          <h1 className="m-4">Personaliza tu bolsa de trabajo</h1>
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
<iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15292.937436062293!2d-93.0905851!3d16.6150032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed29faf70c283b%3A0xff57a2e3d9c9bd10!2sUniversidad%20Polit%C3%A9cnica%20de%20Chiapas!5e0!3m2!1ses-419!2smx!4v1682339513273!5m2!1ses-419!2smx"
width="600"
height="450"
style={{ border: 0 }}
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
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

export default Bolsa;




