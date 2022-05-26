import { Container, Row, Col } from "react-bootstrap";
import CompanyData from "../../assets/data";
import {
  BsArrowRight,
  BsCardChecklist,
  BsTools,
  BsCurrencyDollar,
} from "react-icons/bs";

const Features = () => {
  return (
    <section className="py-5 border-bottom" id="features">
      <Container className="px-5 my-5">
        <Row className="gx-5">
          {CompanyData.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} order={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

const FeatureCard = (props) => {
  const {
    order: index,
    feature: { name, description, actionText },
  } = props;

  return (
    <Col lg="4" className="mb-5 mb-lg-0">
      <div className="feature bg-icon text-white rounded-3 mb-3">
        <i>
          {index === 0 ? (
            <BsCardChecklist />
          ) : index === 1 ? (
            <BsTools />
          ) : (
            <BsCurrencyDollar />
          )}
        </i>
      </div>
      <h2 className="h4 fw-bolder">{name}</h2>
      <p>{description}</p>
      <a className="text-decoration-none action-call" href="#contact">
        {actionText}
        <i>
          {" "}
          <BsArrowRight />
        </i>
      </a>
    </Col>
  );
};

export default Features;
