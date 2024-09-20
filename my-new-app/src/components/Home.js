import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import COEdetails from "./COEdetails";
import { MDBTypography } from "mdb-react-ui-kit";
import img15 from './img15.jpeg';
import logooo from './logooo.png'; // Chatbot icon

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowMessage(true);
  }, []);

  const handleChatbotClick = () => {
    window.location.href = "https://backend-cool-14.onrender.com/";
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <COEdetails />
      <Container className="mt-5">
        <Row className="mb-6" xs={1} md={2}>
          <Col className="text-center mb-4 d-flex align-items-center justify-content-center">
            <img
              src={img15}
              className="img-fluid rounded"
              alt="Technology"
              style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <MDBTypography 
                tag="h5" 
                variant="h5" 
                className="fw-bold mb-2" 
                style={{ fontFamily: 'DM Sans, sans-serif', color: "black", textAlign: 'justify' }}>
                Who We Are
              </MDBTypography>
              <hr />
              <MDBTypography tag="h5" variant="h5" className="fw-bold mb-2" style={{ textAlign: 'justify' }}>
                Mission
              </MDBTypography>
              <MDBTypography tag="h5" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: "black", textAlign: 'justify' }}>
                We deliver cutting-edge solutions across cloud, AI, digital, branding, consulting, and sustainability to transform businesses and fuel their success.
                <br /><br />
                Our commitment to budget-conscious innovation, exceptional quality, on-time delivery, and industry-leading standards ensures future-proof solutions for our clients.
              </MDBTypography>
              <hr />
              <MDBTypography tag="h5" variant="h5" className="fw-bold mb-2" style={{ textAlign: 'justify' }}>
                Vision
              </MDBTypography>
              <MDBTypography tag="h5" style={{ fontFamily: 'Matemasie', fontWeight: "500", color: "black", textAlign: 'justify' }}>
                Empowering businesses of all sizes to thrive in the digital age.
              </MDBTypography>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Chatbot Icon */}
      <div 
        onClick={handleChatbotClick}
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '5%',
          width: '10vw', // Responsive width
          height: '10vw', // Responsive height
          maxWidth: '70px', // Max size
          maxHeight: '70px',
          background: `url(${logooo}) no-repeat center/contain`,
          cursor: 'pointer',
          zIndex: 1000
        }}
        title="Chat with us!"
      ></div>

      {/* Chatbot Message Box */}
      {showMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '15%',
            right: '5%',
            width: '40vw', // Responsive width
            maxWidth: '250px', // Max size
            padding: '15px',
            backgroundColor: '#f1f1f1',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1001,
            fontSize: '1rem', // Responsive font size
          }}
        >
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Hi, I am a chatbot. How can I help you?</div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
