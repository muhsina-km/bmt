import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import './Home2.css';
import logo from '../../images/bmt.png';
import { color, motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const Home2 = () => {
  return (
    <div className="home2-page">
      <Row className="header-section" justify="center" align="middle">
        {/* <Col xs={24} className="logo-container">
          <img src={logo} alt="BMT Logo" className="bmt-logo" />
        </Col> */}
      </Row>
      <Row justify="center" align="middle">
        <Col xs={24} md={8} className="left-images">
          <motion.img
            transition={{ duration: 0.8, delay: 0.5 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            src="https://hips.hearstapps.com/hmg-prod/images/male-repair-air-conditioner-at-room-he-is-air-royalty-free-image-1705910069.jpg?resize=980:*"
            alt="Service 1"
            className="side-image"
          />
          <motion.img
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            src="https://learnfluteonline.com/wp-content/uploads/2022/01/Tools--300x251.jpg"
            alt="Service 2"
            className="side-image"
          />
        </Col>
        <Col xs={24} md={16} className="text-content">
          <Title level={1} style={{ color: '#002d72'}}>TECHNICAL SERVICES</Title>
          <Title level={3} style={{ color: '#000000', marginTop: '1px'}}>Residential and Commercial</Title>
          <br />
          <Title level={2} style={{ color: '#002d72'}}>OUR AWESOME SERVICES</Title>
          <Paragraph className="paragraph">✔️ False Ceiling & Light Partitions Installation</Paragraph>
          <Paragraph className="paragraph">✔️ Plumbing & Sanitary Installation</Paragraph>
          <Paragraph className="paragraph">✔️ Carpentry & Wood Flooring Works</Paragraph>
          <Paragraph className="paragraph">✔️ Kitchens Installation</Paragraph>
          <Paragraph className="paragraph">✔️ Building Cleaning Services</Paragraph>
          <Paragraph className="paragraph">✔️ Floor & Wall Tiling Works</Paragraph>
          <Paragraph className="paragraph">✔️ Painting Contracting</Paragraph>
          {/* <div className="contact-info">
            <Title level={3} style={{ color: '#002d72'}}>Book Now</Title>
            <Paragraph className="contact-detail">+971 55 830 7346</Paragraph>
            <Paragraph className="contact-detail">bamdubai24@gmail.com</Paragraph>
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default Home2;
