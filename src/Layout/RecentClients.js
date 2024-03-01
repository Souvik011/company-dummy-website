import React from "react";
import {Row } from "react-bootstrap";
import './RecentClients.css';
import Client from "./Clients";

const RecentClient = () => {
  return (
    <div className="recent-clients">
      <Row >
        <div className="recent-client-info">
        <span className="recent-client-head">Recent clients</span>
        <span className="recent-client-paragraph">
          We worked with the Fortune 500 companies in the USA, Africa, UK,
          Middle East World's 4th Strongest Banking Brand, Automobile & IoT
          industry
        </span>
        </div>
      </Row >
      <Row className="recent-client-details">
        <Client />
      </Row>
    </div>
  );
};
export default RecentClient;
