import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBTypography } from "mdb-react-ui-kit";
import Footer from "./footer";
import Card from "react-bootstrap/Card";
import img37 from './img37.jpeg'


const Cvwriting = () => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    backgroundColor: '#a6afc5',
    transition: "transform 0.3s, box-shadow 0.3s",
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0 4px 20px rgba(0, 0, 0, 0.2)"
      : "0 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* <Header /> */}
      <div className="how-it-works" style={{ padding: "2rem 1rem" }}>
        <Row className="align-items-center mb-5 ">
        <Col className="text-center mb-4 mt-4">
            <img
              src={img37}
              className="img-fluid rounded"
              alt="Technology"
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} lg={7} className="text-center text-lg-start">
            <MDBTypography tag="h1" variant="h1">
             <b  style={{color:"#2e68b1"}}> PRORESUME</b>  <b>CRAFTING</b> 
            </MDBTypography>
            <hr />
            <MDBTypography className="fs-5 lh-base"  style={{ fontFamily: 'Matemasie',fontWeight:"500",color: "black" }}>
            Make a lasting impression with a professionally crafted resume from Cuberoots.
            <br />
              <br />
              <p className="fw-bolder">Why Choose Our CV Writing Service?</p>
              We offer:
              <ul>
              <li>Personalized resume writing: Tailored to your specific career goals and industry.</li>
              <li>Keyword optimization: Ensuring your resume gets noticed by Applicant Tracking Systems (ATS).</li>
              <li>Compelling content: Highlighting your skills, achievements, and experience in a clear and concise manner.</li>
              <li>Expert guidance:  Receive personalized advice and support throughout the process.</li>
              </ul>
            </MDBTypography>
          </Col>
        </Row>

        {/* Centered Price Card with Hover Effect */}
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card
              border="dark"
              className="h-100 shadow-lg text-center"
              style={cardStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-dollar-sign" style={{ color: "#2e68b1", padding: "3%" }}></i> <b>CV WRITING SERVICE</b>
                </Card.Title>
                <Card.Text  style={{ fontFamily: 'Matemasie',fontWeight:"700" }}>
                  Get a professional CV that highlights your strengths and
                  experiences. Ideal for professionals at all levels.
                </Card.Text>
                <p className="fw-bolder" style={{ fontSize: "1.5rem" }}>Price: Rs.750</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cvwriting;
