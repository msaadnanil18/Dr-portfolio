import React from 'react';
import { Typography, Form, Input, Button } from 'antd';
import { WhatsAppOutlined} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    // Handle form submission logic here
    console.log('Received values:', values);
  };

  const handleWhatsAppClick = () => {
   
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=9990639211';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-8">
      <Title level={2} className="mb-4 gap-x-3 ">
        Contact Me
       <Button icon={ <WhatsAppOutlined />} onClick={handleWhatsAppClick} />
      </Title>
      <Paragraph>
        If you have any questions or would like to schedule an appointment,
        please feel free to reach out to me.
        
      </Paragraph>
      <Form
        name="contact-form"
        onFinish={onFinish}
        layout="vertical"
        className="mt-6"
      >
        <Form.Item
          label="Your Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Your Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Your Message"
          name="message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contact;
