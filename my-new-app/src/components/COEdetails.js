import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBTypography } from 'mdb-react-ui-kit';
import { MDBCol } from 'mdb-react-ui-kit';
import cubebgr from './cubebgr.png'
import background from './background.jpeg'; 
import '../App.css';

const COEdetails = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '5% 2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay with 70% opacity
          padding: '3%',
          borderRadius: '10px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={7} className="text-center text-md-start mb-4 mb-md-0 mt-5">
            <MDBTypography
              tag="h1"
              variant="h1"
              className="mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#2e68b1',
                fontSize: 'calc(1rem + 1vw)',
                textAlign: 'justify',
              }}
            >
              EXPLORE THE CUBEROOTS
            
            </MDBTypography>
            <hr className="my-4" style={{ borderColor: 'white' }} />
            <MDBTypography
              className="lead mb-0 font-dm-sans"
              style={{
                fontFamily: 'Matemasie',
                fontWeight: '500',
                color: '#DDE7FE',
                fontSize: 'calc(1rem + 0.5vw)',
                textAlign: 'justify',
              }}
            >
             At Cuberoots, we're passionate about empowering individuals and organizations to reach their full potential. We provide expert guidance and support across a range of services, including internships, Industry based projects for academics,CV writing, career consulting, and research projects.              <br />
              <br />
              We also champion entrepreneurship and innovation, offering resources and mentorship to help turn your ideas into thriving businesses. Whether you're looking to advance your career or build something extraordinary, Cuberoots is your partner for growth and success.            </MDBTypography>
          </Col>
          <Col xs={12} md={5} className="text-center mt-4 mt-md-0">
          <MDBCol lg="10" md="8" sm="12" className="mx-auto">
    <img src={cubebgr}  alt="cool" style={{ width: '100%', height: 'auto', maxHeight: '500px' }}/>
  </MDBCol>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default COEdetails;
