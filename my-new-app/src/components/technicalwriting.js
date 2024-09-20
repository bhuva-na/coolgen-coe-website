import React, { useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import img25 from './girlai.jpg';
import img23 from './womenbi.jpg';

// import imgTechnical from './imgTechnical.jpg'; // Replace with your technical writing image
import img12 from './penaibi.jpg'; // Replace with your technical writing process image
import { Col, Row } from "react-bootstrap";
import img29 from './penai.jpg'
const TechnicalWriting = () => {
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
        <div
          style={{
            backgroundImage: `url(${img23})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '50px 0',
            position: 'relative',
            color: 'white',
            marginBottom: "5%",
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '50px',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            <MDBTypography tag="h1" variant="h1" className="mb-6 mt-5">
              <b>TECHNICAL</b> <b style={{ color: "#2e68b1" }}>WRITING</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-sm" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'white' }}>
              <h4>Enhance your ability to produce clear, concise, and accurate technical documents.</h4>
              <br />
              <h4>Our program covers writing user manuals, guides, and documentation, preparing you for technical communication roles.</h4>
            </MDBTypography>
          </div>
        </div>

        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="text-center mb-4" style={{ borderRight: "1px solid black", paddingRight: "5%" }}>
            <img
              src={img29}
              className="img-fluid rounded"
              alt="Technical Writing Process"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center" style={{ paddingLeft: "3%" }}>
            <MDBTypography tag="h1" variant="h1" className="mb-2">
              <b>HOW IT WORKS</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
              <h5>Our technical writing program equips you with skills to produce effective technical documents.</h5>
              <br />
             <h5>Learn to create user manuals, guides, and documentation with expert feedback and guidance.</h5> 
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
                  <i className="fas fa-file-alt" style={{color:"#2e68b1",padding:"2%"}}></i> <b>   Detailed Documentation</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Learn to create detailed and user-friendly documentation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="primary"
              className="h-100 shadow-lg"
              style={cardStyle(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-pen" style={{color:"#2e68b1",padding:"2%"}}></i>  <b>Writing Skills</b> 
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Enhance your technical writing and communication skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="primary"
              className="h-100 shadow-lg"
              style={cardStyle(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-chalkboard-teacher" style={{color:"#2e68b1",padding:"2%"}}></i><b> Expert Guidance</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Receive feedback and support from experienced technical writers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              border="primary"
              className="h-100 shadow-lg"
              style={cardStyle(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-award" style={{color:"#2e68b1",padding:"2%"}}></i><b> Professional Development</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                  Achieve professional growth and enhance your career prospects in technical writing.
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

export default TechnicalWriting;
