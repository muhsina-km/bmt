import React from 'react';
import { Typography, Card, Row } from 'antd';
import './Home.css';
import logo from '../../images/bmt.png';
import Home2 from './Home2';
import Home3 from './Home3';

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <>
      <div className="home-page">
        <Card className="home-page-content" bordered={false}>
          <Row justify="center" align="middle">
            <img src={logo} alt="BMT Logo" className="logo" />
          </Row>
          <Title level={2} style={{ color: '#002d72' }}>BARAKT ALMADINA TECHNICAL SERVICES L.L.C</Title>
          <div className="separator"></div>
          <Title level={3} style={{ color: '#002d72' }}>Transforming Ideas into Reality</Title>
          <div className="contact-info">
            {/* <Paragraph className="contact-text">
              <span className="contact-icon">📞</span> +971 55 830 7346
            </Paragraph>
            <Paragraph className="contact-text">
              <span className="contact-icon">📧</span> bamdubai24@gmail.com
            </Paragraph> */}
            <Paragraph className="contact-text">
            <span className="contact-icon">📞</span> 
            <a href="tel:+971558307346" style={{ color: '#002d72' }}>+971 55 830 7346</a>
          </Paragraph>
          <Paragraph className="contact-text">
            <span className="contact-icon">📧</span> 
            <a href="mailto:bamdubai24@gmail.com" style={{ color: '#002d72' }}>bamdubai24@gmail.com</a>
          </Paragraph>
          </div>
        </Card>
      </div>
      <Home2 />
      <Home3 />
    </>
  );
}

export default Home;
