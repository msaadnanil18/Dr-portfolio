import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const { Header } = Layout;

const AppHeader = () => {
  const scrollToElement = (elementId) => {
    // Scroll to the top of the page first
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });

    // Then scroll to the desired section
    setTimeout(() => {
      scroll.scrollTo(elementId, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 800); // Adjust the delay to match the duration of the scrollToTop animation
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/" onClick={() => scrollToElement('homeSection')}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about" onClick={() => scrollToElement('aboutSection')}>
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/services" onClick={() => scrollToElement('servicesSection')}>
            Services
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/experience" onClick={() => scrollToElement('experienceSection')}>
            Experience
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/contact" onClick={() => scrollToElement('contactSection')}>
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
