import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import img11 from './img11.jpg';
import img3 from './img3.jpg';

const MBAprojects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardStyle = (index) => ({
    backgroundColor: '#a6afc5',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hoveredCard === index ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container className="mt-0">
        <Row className="mb-6 align-items-center" xs={1} md={2}>
          <Col className="d-flex flex-column justify-content-center mb-6">
  <MDBTypography tag="h1" variant="h1" className="mb-1 mt-5">
    <b>RESEARCH</b> <b style={{ color: "#2e68b1" }}>PROJECTS</b>
  </MDBTypography>

            <hr />
            <MDBTypography className="fs-5 lh-sm" style={{ fontFamily: 'Matemasie', fontWeight: "500",color:'black' }}>
            Cuberoots is your partner in research success. We offer expert guidance, resources, and support to help you achieve your research goals. Our services include:           <br />
              <br />
              <ul>
              <li>Connecting with experienced researchers</li>
              <li>Refining research questions and methodology</li>
              <li>Accessing literature reviews and data analysis tools</li>
              <li>Project planning and collaboration</li>
              <li>Disseminating research findings</li>
              <li>Research internships for hands-on experience</li>
              </ul>
            </MDBTypography>
          
          </Col>
          <Col className="text-center mb-4">
            <img
              src={img11}
              className="img-fluid rounded"
              alt="Technology"
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>

        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="text-center mb-4">
            <img
              src={img3}
              className="img-fluid rounded"
              alt="Technology"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <MDBTypography tag="h1" variant="h1" className="mb-2">
             <b> HOW IT WORKS</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base" style={{ fontFamily: 'Matemasie', fontWeight: "500",color:'black' }}>
            Connect with expert researchers for guidance, refine your project through collaboration, access essential resources, and gain hands-on experience with internships to effectively disseminate your findings.              <br /><br />
              <br />
            </MDBTypography>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-6 g-4" xs={1} sm={2} md={3} lg={4}>
          <Col>
          <Card
    border="dark"
    className="h-100 shadow-lg"
    style={cardStyle(1)}
    onMouseEnter={() => handleMouseEnter(1)}
    onMouseLeave={handleMouseLeave}
  >
    <Card.Body>
      <Card.Title>
        <MDBIcon fas icon="code-branch" style={{ color: "#2e68b1", padding: "2%" }} />
        <b>REAL-WORLD EXPERIENCE</b>
      </Card.Title>
      <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
        Real-world experience working with industry leaders.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col>
  <Card
    border="dark"
    className="h-100 shadow-lg"
    style={cardStyle(2)}
    onMouseEnter={() => handleMouseEnter(2)}
    onMouseLeave={handleMouseLeave}
  >
    <Card.Body>
      <Card.Title>
        <MDBIcon far icon="address-card" style={{ color: "#2e68b1", padding: "3%" }} />
        <b>PRACTICAL APPLICATION</b>
      </Card.Title>
      <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
        Opportunity to apply academic knowledge to practical scenarios.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col>
  <Card
    border="dark"
    className="h-100 shadow-lg"
    style={cardStyle(3)}
    onMouseEnter={() => handleMouseEnter(3)}
    onMouseLeave={handleMouseLeave}
  >
    <Card.Body>
      <Card.Title>
        <MDBIcon fas icon="dollar-sign" style={{ color: "#2e68b1", padding: "2%" }} />
        <b>COMPETITIVE PAY</b>
      </Card.Title>
      <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
        Receive competitive pay for your contributions.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col>
  <Card
    border="dark"
    className="h-100 shadow-lg"
    style={cardStyle(4)}
    onMouseEnter={() => handleMouseEnter(4)}
    onMouseLeave={handleMouseLeave}
  >
    <Card.Body>
      <Card.Title>
        <MDBIcon fas icon="laptop-code" style={{ color: "#2e68b1", padding: "2%" }} />
        <b>ENHANCE YOUR CV</b>
      </Card.Title>
      <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
        Enhance your CV with substantial project work.
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default MBAprojects;
