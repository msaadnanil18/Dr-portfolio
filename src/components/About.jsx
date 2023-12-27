import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const About = () => {
  return (
    <section id="about" className="py-8">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <Paragraph>
        I am a dedicated physiotherapist with a passion for helping people
        regain their mobility and lead a pain-free life.
      </Paragraph>
      {/* Add more information about the doctor */}
    </section>
  );
};

export default About;
