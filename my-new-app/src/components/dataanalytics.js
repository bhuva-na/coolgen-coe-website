import React, { useState } from 'react';
import blackman from './blackman.jpg';
import { MDBTypography } from 'mdb-react-ui-kit';
import Footer from './footer';

function Dataanalytics() {
  const [activeTab, setActiveTab] = useState('Why Choose Our Course?');

  const renderContent = () => {
    switch (activeTab) {
      case 'Why Choose Our Course?':
        return (
          <ul style={{ fontSize: "18px" }}>
            <li><b>Expert-Led Training: </b>Learn from industry experts with real-world experience in data analytics and business intelligence.</li>
            <li><b>Hands-On Learning:</b> Our course is designed with practical exercises, case studies, and real-time data projects to ensure you're job-ready.</li>
            <li><b>Latest Tools & Technologies:</b> Gain proficiency in tools like Python, SQL, Excel, Tableau, and Power BI – widely used in the industry today.</li>
            <li><b>Business-Oriented Approach:</b> Our curriculum focuses on applying data analytics to solve real business problems, driving growth and improving decision-making.</li>
          </ul>
        );
      case 'careerAssistance':
        return (
          <ul style={{ fontSize: "18px" }}>
            <li><b>Fundamentals of Data Analytics: </b>Understanding data types, structures, and processing methods.</li>
            <li><b>Data Wrangling & Visualization:</b> Learn how to clean, organize, and visualize data using popular tools.</li>
            <li><b>Statistical Analysis & Modeling:</b> Master techniques like regression, hypothesis testing, and predictive modeling.</li>
            <li><b>Business Intelligence Techniques:</b> Convert data into actionable insights for strategic decision-making.</li>
            <li><b>Real-Time Project Work:</b> Work on real-life datasets to apply your learning and build a project portfolio.</li>
          </ul>
        );
      case 'practicalLearning':
        return (
          <ul style={{ fontSize: "18px" }}>
            <li><b>Aspiring Data Analysts:</b> If you want to kickstart your career in one of the most in-demand fields, this course is for you!</li>
            <li><b>Business Professionals:</b> Make smarter decisions by understanding and leveraging the data in your company.</li>
            <li><b>Entrepreneurs:</b> Learn how to use data to identify new opportunities and optimize your business performance.</li>
            <li><b>Students and Graduates:</b> Enhance your skills and make yourself more marketable to employers in a data-driven world.</li>
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
            Unlock the Power of Data with Cuberoots'<span style={styles.highlight}> DATA ANALYTICS COURSE!</span>
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
              <li>⭐<b> Data Analytics as a Game-Changer:</b> Transforming businesses to stay ahead of the competition.</li>
              <li>⭐<b>Comprehensive Course:</b> Our Data Analytics Course at Cuberoots equips you with essential tools and knowledge.</li>
              <li>⭐<b>Up-to-date Syllabus: </b> Includes Generative AI Modules for the latest insights.</li>
              <li>⭐ <b>Complimentary Bootcamp:</b> Offers a Python Programming Bootcamp to enhance your skills.</li>
              <li>⭐<b>Hands-on Experience:</b> Over 60 case studies and 14 industry projects to apply your learning.</li>
              <li>⭐<b>Career Empowerment:</b> Empower your career with data-driven insights tailored to your goals.</li>
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
          <button style={activeTab === 'Why Choose Our Course?' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('Why Choose Our Course?')}>Why Choose Our Course?</button>
          <button style={activeTab === 'careerAssistance' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('careerAssistance')}>What You'll Learn</button>
          <button style={activeTab === 'practicalLearning' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('practicalLearning')}>Who Should Take This Course?</button>
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

export default Dataanalytics;
