import "./Fintech.css";
import { Row, Col } from "react-bootstrap";
import {AiOutlineArrowRight} from 'react-icons/ai';

const Fintech = () => {
  return (
    <div className="fintech">
      <Row>
        <Col sm={6}>
          <div className="fintech-main">
            <div className="main-text">
              <span className="head">Fintech Solution</span>
              <span className="head-info">Transforming Fintech with AI</span>
              <span className="info">
                <p>Fraud detection</p>
                <p>Transaction categorisation</p>{" "}
                <p>Risk Scoring</p>
              </span>
              <span className="text">
                Empower your financial institution with our advanced fintech
                solutions. From real-time fraud detection to easy bookkeeping,
                our software development services provide credit risk scoring
                for accurate lending eligibility, transaction categorization for
                seamless organization, and anomaly detection to safeguard your
                assets
              </span>
              <span className="view"> See Full Case Study <AiOutlineArrowRight /></span>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="fintech-image">
            <img src={'https://geeksinvention.com/assets/v3/industry-fintech.svg'} alt="fintech" ></img>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Fintech;
