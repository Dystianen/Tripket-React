import React, { useState } from 'react';
import { Button, Layout, Menu, PageHeader, Popover, Typography } from 'antd';
import { MenuList } from './MenuList';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { AppRoute } from '../../routes/app';

const { Text, Paragraph } = Typography;
const { Header, Content, Sider } = Layout;

export const DesktopLayout = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <AppRoute />
    </div>
  );
};
