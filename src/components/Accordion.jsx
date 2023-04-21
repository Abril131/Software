import Accordion from 'react-bootstrap/Accordion';

function Accordi() {
    return ( 
     <>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className=''>PERFIL DE EGRESO</Accordion.Header>
        <Accordion.Body>
              El ingeniero en Desarrollo de Software tiene la capacidad de diseñar y desarrollar 
              software de calidad, gestionar, administrar e implantar proyectos, así como desarrollar
              investigación en el campo de las tecnologías de información así como planear soluciones 
              de tecnologías de información para automatizar y optimizar procesos de las empresas
              mediante proyectos de software.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>VALORES</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>COMPETENCIAS</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>PERFIL LABORAL</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </>
     );
}

export default Accordi;