import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-scroll';
const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
    <div className="logo" />
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home">
        <Link to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
      </Menu.Item>
      <Menu.Item key="Services">
        <Link to="Services" spy={true} smooth={true} duration={500}>
        Services
        </Link>
      </Menu.Item>
      <Menu.Item key="experience">
        <Link to="experience" spy={true} smooth={true} duration={500}>
          Experience
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </Menu.Item>
    </Menu>
    </Header>
  );
};

export default AppHeader;
