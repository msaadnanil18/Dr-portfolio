import React, { useRef } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
// import image from /src/assets/images/Cardio.jpg

const { Title, Paragraph } = Typography;

const Services = () => {
  const servicesData = [
    {
      title: 'Orthopedic Physiotherapy',
      description: 'Specialized treatment for musculoskeletal conditions.',
      image: 'https://img.freepik.com/free-vector/sports-physiotherapy-illustration_23-2150076874.jpg?size=626&ext=jpg&ga=GA1.1.1204458583.1703752941&semt=ais',
    },
    {
      title: 'Sports Injury Rehabilitation',
      description: 'Tailored programs to help athletes recover from injuries.',
      image: 'https://img.freepik.com/free-vector/orthopedic-concept-illustration_114360-8774.jpg?size=626&ext=jpg&ga=GA1.1.1204458583.1703752941&semt=ais',
    },
    {
      title: 'Post-Surgery Recovery',
      description: 'Supportive care to enhance recovery after surgery.',
      image: 'https://img.freepik.com/free-vector/rehabilitation-therapy-set_1284-37841.jpg?size=626&ext=jpg&ga=GA1.1.1204458583.1703752941&semt=ais',
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


