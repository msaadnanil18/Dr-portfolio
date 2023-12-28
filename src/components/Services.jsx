import React, { useRef } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const { Title, Paragraph } = Typography;

const Services = () => {
  const servicesData = [
    {
      title: 'Orthopedic Physiotherapy',
      description: 'Specialized treatment for musculoskeletal conditions.',
      image: '/src/images/Cardio.jpg',
    },
    {
      title: 'Sports Injury Rehabilitation',
      description: 'Tailored programs to help athletes recover from injuries.',
      image: '/src/images/sport.jpg',
    },
    {
      title: 'Post-Surgery Recovery',
      description: 'Supportive care to enhance recovery after surgery.',
      image: '/src/images/Therapeutic.jpg',
    },
   
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(5)' : 'translateY(100px)',
    config: config.gentle,
  });

  return (
    <section id="services" className="py-8" ref={ref}>
      <div className="p-5">
        <Title level={2} className="mb-4">
          Our Services
        </Title>
        <Row gutter={[16, 16]}>
          {servicesData.map((service, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <animated.div style={cardAnimation}>
                <Card
                  title={service.title}
                  hoverable
                  className="w-full text-center"
                  cover={<img className="h-52" src={service.image} alt="" />}
                >
                  <Paragraph>{service.description}</Paragraph>
                </Card>
              </animated.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;


