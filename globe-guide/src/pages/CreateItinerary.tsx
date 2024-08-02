import React, { useState, ChangeEvent } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import burjKhalifaImg from '../assets/5.png';
import dubaiMallImg from '../assets/3.png';
import SkiDubai from '../assets/4.png';
import AlFahidiFort from '../assets/3.png';
import GoldSouk from '../assets/1.png';


const attractions = [
  { name: 'Burj Khalifa', image: burjKhalifaImg },
  { name: 'Dubai Mall', image: dubaiMallImg },
  { name: 'Ski Dubai', image: SkiDubai },
  { name: 'Al Fahidi Fort', image: AlFahidiFort },
  { name: 'Gold Souk', image: GoldSouk },
  { name: 'Burj Khalifa', image: burjKhalifaImg },

];

const CreateItinerary = () => {
  // Explicitly define the type of selectedAttractions as an array of strings
  const [selectedAttractions, setSelectedAttractions] = useState<string[]>([]);

  const handleAttractionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedAttractions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <Container>
      <h1 className="text-center my-4">Create Itinerary</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Starting Address/Location (In the same City area): *</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mode of Travel: *</Form.Label>
          <Form.Select required>
            <option value="car">By Car</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Itinerary Date: *</Form.Label>
          <Form.Control type="date" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Start Time: *</Form.Label>
          <Form.Control type="time" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Attractions (Min 2 and Max 6): *</Form.Label>
          <Row>
            {attractions.map((attraction, index) => (
              <Col xs={6} md={4} lg={2} key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={attraction.image} style={{height:'210px', width:'195px', gap:'35px'}}/>
                  <Card.Body>
                    <Card.Title>{attraction.name}</Card.Title>
                    <Form.Check 
                      type="checkbox" 
                      value={attraction.name} 
                      onChange={handleAttractionChange} 
                      checked={selectedAttractions.includes(attraction.name)}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">Show My Itinerary</Button>
      </Form>
      <br/><br/>
    </Container>
  );
};

export default CreateItinerary;
