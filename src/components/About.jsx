import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const About = () => {
  return (
    <section id="about" className="py-8 p-5 ">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <Paragraph>
        {/* I am a dedicated physiotherapist with a passion for helping people
        regain their mobility and lead a pain-free life. */}
        Greetings! I am Dr. Parwez Alam, a dedicated and compassionate physiotherapist with a profound commitment to enhancing the health and well-being of individuals. With a wealth of experience and a passion for promoting optimal physical function, I am driven to provide personalized and effective physiotherapy services.
      </Paragraph>
  
    </section>
  );
};

export default About;
