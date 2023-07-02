import React from 'react';
import { Layout, Menu, Button } from 'antd';

const { Header } = Layout;

const NavBar = () => (
  <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >Home</Menu.Item>
        <Menu.Item key="2" >Dashboard</Menu.Item>
        <Menu.Item key="3">Count my Calories</Menu.Item>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Logout</Button>
        
      </div>
    </Header>
  </Layout>
);

export default NavBar;