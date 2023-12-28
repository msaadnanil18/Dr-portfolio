import React from 'react';
import { Typography, Timeline, Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Experience = () => {
  const experienceData = [
    {
      title: 'Senior Physiotherapist',
      company: 'ABC Physio Clinic',
      duration: 'Jan 2015 - Present',
    },
    {
      title: 'Physiotherapy Intern',
      company: 'City Hospital',
      duration: 'May 2014 - Dec 2014',
    },
    // Add more experiences
  ];

  return (
    <section  id="experienceSection" className="py-8">
      <Title level={2} className="mb-4">
        Professional Experience
      </Title>
      <Timeline mode="alternate">
        {experienceData.map((experience, index) => (
          <Timeline.Item key={index} label={experience.duration}>
            <Space direction="vertical" size={8}>
              <Title level={4}>{experience.title}</Title>
              <Paragraph>{experience.company}</Paragraph>
            </Space>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
