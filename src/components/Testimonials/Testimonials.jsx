import { Container, Row, Col, Card } from "react-bootstrap";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import CompanyData from "../../assets/data";

const Testimonials = () => {
  return (
    <section className="py-5 border-bottom" id="testimonials">
      <Container className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">Testimonios</h2>
          <p className="lead mb-0">
            ¿Que opinan nuestros clientes de nuestro servicio?
          </p>
        </div>
        <Row className="row gx-5 justify-content-center">
          <Col lg="6">
            {CompanyData.testimonials.map((testimonial, index) => (
              <TestimonialCard id={index} testimonial={testimonial} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const TestimonialCard = (props) => {
  const {
    testimonial: { description, client },
  } = props;

  return (
    <Card className="mb-4">
      <Card.Body className="p-4">
        <div className="d-flex">
          <div className="flex-shrink-0">
            <i className="icon-color fs-1">
              <BsFillChatRightQuoteFill />
            </i>
          </div>
          <div className="ms-4">
            <p className="mb-1">{description}</p>
            <div className="small text-muted">- {client}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Testimonials;
