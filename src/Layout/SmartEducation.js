import React from "react";
import { Row, Col } from "react-bootstrap";
import './Fintech.css';

const SmartEducation = () => {
    return (<div className="smart-education">
        <Row>
            <Col sm={6}>
  <img className="iot-img" src={'https://geeksinvention.com/assets/v3/industry-education.webp'} alt="smart" />
            </Col>
            <Col sm={6}>
            <div className="main-text">
              <span className="head">Smart Education</span>
              <span className="head-info">
              Elevate your Education Institution
              </span>
              <span className="info">
                <p>Learning Management</p>
                <p>Course offering</p> <p>Professional Training</p>
              </span>
              <span className="text">
              Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.
              </span>
              <span className="view"> See Full Case Study</span>
            </div>
            </Col>
        </Row>
    </div>);
};

export default SmartEducation;