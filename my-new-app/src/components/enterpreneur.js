import React, { useState } from 'react';
import blackman from './enter.jpg';
import { MDBTypography } from 'mdb-react-ui-kit';
import Footer from './footer';

function Enterprenur() {
  const [activeTab, setActiveTab] = useState('Why Choose Our Course?');

  const renderContent = () => {
    switch (activeTab) {
      case 'Why Choose Our Course?':
        return (
          <ul style={{ fontSize: "18px" }}>
           <li> Aspiring entrepreneurs looking to start their own business.</li>
            <li>Existing business owners seeking to scale or revamp their strategies.</li>
            <li>Business leaders and managers looking to foster innovation and growth.</li>
            <li>Investors and consultants wanting to understand the dynamics of startup ecosystems.</li>
          </ul>
        );
      case 'careerAssistance':
        return (
          <ul style={{ fontSize: "18px" }}>
            <li><b>Introduction to Strategic Entrepreneurship</b>Understand the entrepreneurial mindset and identify market opportunities.</li>
            <li><b>Building a Business Model</b>Design scalable business models and develop a Minimum Viable Product (MVP).</li>
            <li><b>Market Research</b>Conduct market analysis and identify target customer segments.</li>
            <li><b>Financing and Fundraising</b> Explore funding options and craft a compelling pitch for investors.</li>
            <li><b>Growth Strategies</b>Implement growth hacking techniques and develop expansion strategies.</li>
            <li><b>Innovation and Leadership</b>Embrace innovation, build high-performance teams, and incorporate sustainability into your business strategy.</li>

          </ul>
        );
      case 'practicalLearning':
        return (
          <ul style={{ fontSize: "18px" }}>
           



            <li> Learn how to develop and implement a strategic vision for your business.</li>
            <li>Understand key entrepreneurial challenges and how to overcome them.</li>
            <li>Gain practical insights into funding, scaling, and growing your startup.</li>
            <li>Master leadership and innovation strategies essential for long-term success.</li>
          </ul>
        );
      case 'jobOpportunities':
        return (
          <ul style={{ fontSize: "18px" }}>
            <li><b>Duration:</b> Weekend batches.</li>
            <li><b>Format:</b> Available in online modes to suit your needs.</li>
            <li><b>Certification:</b> Earn a certificate from Cuberoots upon successful completion.</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Course Snapshot Section */}
      <div style={styles.snapshotContainer}>
        <MDBTypography tag="h1" variant="h1" className="mb-5 mt-5">
          <b style={styles.title}>
          Turn your entrepreneurial vision into a thriving venture with <span style={styles.highlight}>our Strategic Entrepreneurship course at Cuberoots.</span>
          
          </b>
        </MDBTypography>
        <div style={styles.snapshotBox}>
          <div style={styles.snapshotItem}>
            <h3 style={styles.ranked}>Ranked #1</h3>
            <p>Analytics India Magazine, 2023</p>
          </div>
          <div style={styles.snapshotItem}>
            <h3 style={styles.ranked}>14+</h3>
            <p>Industry Projects</p>
          </div>
          <div style={styles.snapshotItem}>
            <h3 style={styles.ranked}>500+</h3>
            <p>Successful Transitions</p>
          </div>
        </div>
        <div style={styles.detailsContainer}>
          <div style={styles.features}>
            <ul style={styles.featureList}>


              <li>⭐Turn your entrepreneurial vision into a thriving venture with our Strategic Entrepreneurship course at Cuberoots.
              </li>
              <li>⭐This course is designed to equip you with the essential skills and knowledge needed to launch and grow a successful business.
              </li>
              <li>⭐Gain insights from industry experts who will guide you through the complexities of entrepreneurship.
              </li>
              <li>⭐Develop a comprehensive business plan that outlines your goals, strategies, and financial projections.
              </li>
              <li>⭐Collaborate with like-minded individuals to foster innovation and creativity in your entrepreneurial journey..</li>
              <li>⭐Enroll now and take the first step toward realizing your business dreams!</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img
              src={blackman}
              alt="Woman in Yellow"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      {/* Tabs Section (Learning Support, Career Assistance, etc.) */}
      <div style={styles.tabContainer}>
        <div style={styles.sidebar}>
          <button style={activeTab === 'Why Choose Our Course?' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('Why Choose Our Course?')}>Who Should Enroll?</button>
          <button style={activeTab === 'careerAssistance' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('careerAssistance')}>Course Modules</button>
          <button style={activeTab === 'practicalLearning' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('practicalLearning')}>Key Takeaways
          </button>
          <button style={activeTab === 'jobOpportunities' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('jobOpportunities')}>Course Highlights</button>
        </div>

        <div style={styles.content}>
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  },
  snapshotContainer: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  highlight: {
    color: '#2e68b1',
  },
  snapshotBox: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '40px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
  },
  snapshotItem: {
    textAlign: 'center',
    flex: '1 1 30%',
    marginBottom: '20px',
  },
  ranked: {
    fontSize: '24px',
    color: '#2e68b1',
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  features: {
    width: '60%',
    flex: '1 1 60%',
  },
  featureList: {
    listStyleType: 'none',
    padding: "5%",
    fontSize: '18px',
  },
  imageContainer: {
    width: '35%',
    textAlign: 'right',
    flex: '1 1 35%',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '400px', // Limit the max width for larger screens
    borderRadius: '10px',
  },
  // Tabs Section
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sidebar: {
    width: '25%',
    padding: '20px',
    borderRight: '1px solid #ddd',
  },
  tab: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer',
  },
  activeTab: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #2e68b1',
    borderRadius: '4px',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer',
    color: '#2e68b1',
  },
  content: {
    width: '75%',
    padding: '20px',
  },
  // Media query for small screens
  '@media (max-width: 768px)': {
    imageContainer: {
      textAlign: 'center', // Center the image on small screens
      width: '100%',
      flex: '1 1 100%',
    },
    image: {
      maxWidth: '300px', // Limit the image size on small screens
    },
    detailsContainer: {
      flexDirection: 'column', // Stack elements vertically on small screens
      alignItems: 'center', // Center elements
    },
    snapshotBox: {
      flexDirection: 'column', // Stack items vertically on small screens
    },
    tabContainer: {
      flexDirection: 'column', // Stack the sidebar and content
    },
    sidebar: {
      width: '100%', // Full width for sidebar on small screens
      borderRight: 'none', // Remove border on small screens
    },
    content: {
      width: '100%', // Full width for content on small screens
    },
  },
};

export default Enterprenur;
