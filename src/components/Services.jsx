import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Services = () => {
  const servicesData = [
    {
      title: 'Orthopedic Physiotherapy',
      description: 'Specialized treatment for musculoskeletal conditions.',
    },
    {
      title: 'Sports Injury Rehabilitation',
      description: 'Tailored programs to help athletes recover from injuries.',
    },
    {
      title: 'Post-Surgery Recovery',
      description: 'Supportive care to enhance recovery after surgery.',
    },
    // Add more services
  ];

  return (
    <section id="services" className="py-8">
      <Title level={2} className="mb-4">
        Our Services
      </Title>
      <Row gutter={[16, 16]}>
        {servicesData.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={service.title}
              hoverable
              className="text-center"
            >
              <Paragraph>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
