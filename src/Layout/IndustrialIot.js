import React from "react";
import { Row, Col } from "react-bootstrap";
import './IndustrialIot.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

const IndustrialIot = () => {
  return (
    <>
      <div className="industrial">
        <Row>
          <Col sm={6} >
          <img className="iot-img" src={'https://geeksinvention.com/assets/v3/industry-iot.webp'} alt="industrial" />
          </Col>
          <Col sm={6}>
            <div className="main-text">
              <span className="head">Industrial IoT</span>
              <span className="head-info">
                Providing a better connected experience
              </span>
              <span className="info">
                <p>Connected manufacturing</p>
                <p>Aviation</p> <p>Smart Building</p>
              </span>
              <span className="text">
                Revolutionize your industry with our innovative IoT solutions.
                Our software development services offer connected manufacturing,
                pollution control, smart transportation, and intelligent
                farming, agriculture, and forestry. With our expertise, you can
                harness the power of technology to increase efficiency, reduce
                waste, and optimize operations for a sustainable future.
              </span>
              <span className="view"> See Full Case Study <AiOutlineArrowRight /></span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default IndustrialIot;
