import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Paragraph } = Typography;

const AppFooter = () => {
  return (
    <Footer className="text-center py-4">
      <Paragraph>
        &copy; 2023 Physiotherapist Portfolio. All rights reserved.
      </Paragraph>
    </Footer>
  );
};

export default AppFooter;
