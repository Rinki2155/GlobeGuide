import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Itinerary = () => {
  return (
    <Container className="itinerary-box my-4">
      <Row>
        <Col>
          <h3>Asia</h3><br/>
          <ul className="list-unstyled">
            <li><Link to="/dubai">Dubai</Link></li>
            <li><Link to="/hong-kong">Hong Kong</Link></li>
            <li><Link to="/kuala-lumpur">Kuala Lumpur</Link></li>
            <li><Link to="/macau">Macau</Link></li>
            <li><Link to="/new-delhi">New Delhi</Link></li>
            <li><Link to="/singapore">Singapore</Link></li>
          </ul>
        </Col>
        <Col>
          <h3>Us</h3><br/>
          <ul className="list-unstyled">
            <li><Link to="/boston">Boston</Link></li>
            <li><Link to="/honolulu">Honolulu (Oahu Island)</Link></li>
            <li><Link to="/miami">Miami</Link></li>
            <li><Link to="/new-york-city">New York City</Link></li>
            <li><Link to="/washington-dc">Washington, D.C.</Link></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Itinerary;
