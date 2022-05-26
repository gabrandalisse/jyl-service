import { Container, Row, Col } from "react-bootstrap";
import CompanyData from "../../assets/data";

const Contact = () => {
  const {
    map: { street, city, province },
    contact: {
      schedule: { days, hours },
      cellphone,
    },
  } = CompanyData;

  return (
    <section className="footer text-center" id="contact">
      <Container>
        <Row>
          <Col lg="4" className="mb-5 mb-lg-0">
            <h2 className="h4 fw-bolder mb-4">Dirección</h2>
            <p className="lead mb-0">
              {street}
              <br />
              {city}, {province}
            </p>
          </Col>

          <Col lg="4" className="mb-5 mb-lg-0">
            <h2 className="h4 fw-bolder mb-4">Horario</h2>
            <p className="lead mb-0">
              {days.from} a {days.to}
              <br />
              De {hours.from} a {hours.to} hs
            </p>
          </Col>

          <Col lg="4" className="mb-5 mb-lg-0">
            <h2 className="h4 fw-bolder mb-4">Teléfono</h2>
            <p className="lead mb-0">{cellphone}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
