import React, { useState } from 'react';
import blackman from './bussiness.jpg';
import { MDBTypography } from 'mdb-react-ui-kit';
import Footer from './footer';

function DataBi() {
  const [activeTab, setActiveTab] = useState('Why Choose Our Course?');

  const renderContent = () => {
    switch (activeTab) {
      case 'Why Choose Our Course?':
        return (
          <ul style={{ fontSize: "18px" }}>
           <li> Data enthusiasts looking to upskill in BI tools and techniques.</li>
            <li>Business professionals aiming to improve decision-making with data insights.</li>
            <li>IT professionals seeking to expand their expertise in data analytics and BI platforms.</li>
            <li>Entrepreneurs and startup founders wanting to leverage data for growth.</li>
          </ul>
        );
      case 'careerAssistance':
        return (
          <ul style={{ fontSize: "18px" }}>
            <li><b>Introduction to Business Intelligence</b>Learn the role of BI in modern business and key concepts like data and decision-making.</li>
            <li><b>Data Warehousing and Sources</b>Understand data warehousing basics and explore structured and unstructured data sources.

</li>
            <li><b>BI Tools and Platforms</b>Gain hands-on experience with tools like Tableau and Power BI to create dashboards and reports.</li>
            <li><b>Data Analytics and Visualization</b> Discover analytics types and advanced visualization techniques for impactful storytelling.</li>
            <li><b>Data Governance and Real-World Applications
            </b> Learn about data privacy, security best practices, and apply BI in real-world case studies.</li>
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
         
            Unlock the power of data with our comprehensive<span style={styles.highlight}> Business Intelligence (BI) course at Cuberoots.</span>
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
              <li>⭐This course is designed to equip professionals with essential skills in data analysis.</li>
              <li>⭐Participants will learn how to transform raw data into meaningful insights.</li>
              <li>⭐The course emphasizes the importance of data-driven decision-making in business</li>
              <li>⭐Students will explore various tools and techniques for effective data interpretation.</li>
              <li>⭐By the end of the course, learners will be empowered to influence strategic business decisions with their insights.</li>
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
          <button style={activeTab === 'Why Choose Our Course?' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('Why Choose Our Course?')}>Who Should Take This Course?</button>
          <button style={activeTab === 'careerAssistance' ? styles.activeTab : styles.tab} onClick={() => setActiveTab('careerAssistance')}>What You'll Learn</button>
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

export default DataBi;
