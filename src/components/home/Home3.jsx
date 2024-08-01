import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import './Home3.css';
import logo from '../../images/bmt.png';

const { Title, Paragraph } = Typography;

const Home3 = () => {
  return (
    <div className="home3-page">
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col xs={24} md={20}>
          <Card className="home3-page-content" bordered={false}>
            <Row>
              <Col xs={24} md={12} className="left-section">
                <img src={logo} alt="BMT Logo" className="logo" />
                <Title level={2} className="company-title">BARAKT ALMADINA TECHNICAL SERVICES L.L.C</Title>
                <Title level={3} className="why-choose-us" style={{ color: '#002d72'}}>WHY CHOOSE US</Title>
                <div className="services-list">
                  <Paragraph>● Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance</Paragraph>
                  <Paragraph>● Electromechanical Equipment Installation and Maintenance</Paragraph>
                  <Paragraph>● Building Maintenance</Paragraph>
                </div>
              </Col>
              <Col xs={24} md={12} className="contact-section">
                <div className="images-section">
                  <img src="https://m.media-amazon.com/images/I/81OPQzkY5EL._AC_UF894,1000_QL80_.jpg" alt="Service 1" className="service-image" />
                  <img src="https://static.wixstatic.com/media/nsplsh_a26db9e65e194fe6af3ae9e1dc7c1827~mv2.jpg/v1/crop/x_273,y_0,w_2733,h_2670/fill/w_220,h_215,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Emmanuel%20Ikwuegbu.jpg" 
                       alt="Service 2" className="service-image" />
                </div>
                <div className="contact-info">
                  <Paragraph><b>More Information, Please Contact Us</b></Paragraph>
                  {/* <Title level={4}>+971 55 830 7346</Title>
                  <Title level={4} style={{ marginTop: '10px' }}>bamdubai24@gmail.com</Title> */}
          <Title level={5} style={{ margin: 0 }}>
            <a href="tel:+971558307346" style={{ color: '#111111' }}>+971 55 830 7346</a>
          </Title>
          <Title level={5} style={{ marginTop: '10px', margin: 0 }}>
            <a href="mailto:bamdubai24@gmail.com" style={{ color: '#111111' }}>bamdubai24@gmail.com</a>
          </Title>
          <Title level={5} style={{ marginTop: '10px', margin: 0 }}> WhatsApp Us :
            <a href="https://wa.me/971558307346" target="_blank" rel="noopener noreferrer" style={{ color: '#111111' }}>+971 55 830 7346</a>
          </Title>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home3;
