import React, { useState } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import img36 from './penaiopbi.jpg'; // Replace with your literature survey image
import img11 from './womenpic.jpg'; // Replace with your literature survey process image
import { Col, Row } from "react-bootstrap";

const LiteratureSurvey = () => {
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
            backgroundImage: `url(${img36})`,
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
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '50px',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            <MDBTypography tag="h1" variant="h1" className="mb-1 mt-5">
              <b>LITERATURE</b> <b style={{ color: "#2e68b1" }}>SURVEY</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-sm" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'white' ,textAlign:"center"}}>
            Cuberoots streamlines your literature survey process with comprehensive support that includes:<br /><br />
            <ul>
              <li>Identifying relevant databases and search terms</li>
              <li>Managing and critically evaluating sources</li>
              <li>Analyzing literature to identify key themes and trends</li>
              <li>Developing a conceptual framework for your research</li>
            </ul>
            </MDBTypography>
          </div>
        </div>

        <Row className="mb-7 align-items-center" xs={1} md={2}>
          <Col className="text-center mb-4" style={{ borderRight: "1px solid black", paddingRight: "5%" }}>
            <img
              src={img11}
              className="img-fluid rounded"
              alt="Literature Survey Process"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center" style={{ paddingLeft: "3%" }}>
          <MDBTypography tag="h1" variant="h1" className="mb-2">
              <b>HOW IT WORKS</b>
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: 'black' }}>
            Cuberoots simplifies your literature survey by helping you identify relevant databases and search terms, manage and evaluate sources, analyze literature for key themes, and develop a robust conceptual framework for your research.              <br /><br />
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
                  <i className="fas fa-book" style={{color:"#2e68b1",padding:"2%"}}></i> <b>Comprehensive Analysis</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                Conduct an in-depth review of existing literature to understand the current state of research and its implications for your work.                </Card.Text>
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
                  <i className="far fa-edit" style={{color:"#2e68b1",padding:"2%"}}></i> <b>Research Gap Identification</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                Identify gaps in existing research to uncover opportunities for new studies and contribute valuable insights to your field.                </Card.Text>
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
                  <i className="fas fa-chalkboard-teacher" style={{color:"#2e68b1",padding:"4%"}}></i><b>Expert Guidance</b> 
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                Receive personalized guidance from experienced researchers throughout the survey process to enhance your understanding and approach.                </Card.Text>
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
                  <i className="fas fa-award" style={{color:"#2e68b1",padding:"2%"}}></i> <b>Academic Recognition</b>
                </Card.Title>
                <Card.Text style={{ fontFamily: 'Matemasie', fontWeight: "700", color: 'black' }}>
                Gain recognition for your thorough analysis and contributions, enhancing your credibility and standing within the academic community.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default LiteratureSurvey;
