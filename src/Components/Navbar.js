import React from 'react';
import { Layout, Menu } from 'antd';
// import { Nav } from 'react-bootstrap';

import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
const { Header } = Layout;

const Navbar = () => {
  const handleLogoutClick = () => {
    Auth.logout();
  };

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/calories">Count my Calories</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/about-us">About Us</Link>
          </Menu.Item>
        </Menu>
        <div>
          {console.log(Auth.loggedIn())};
          {Auth.loggedIn() ? (
            <>
              <Link onClick={handleLogoutClick}>Logout</Link>
            </>
          ) : (
            <Link onClick={() => (window.location.pathname = '/login')}>
              Login
            </Link>
          )}
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
