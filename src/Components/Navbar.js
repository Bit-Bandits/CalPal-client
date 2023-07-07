import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Nav } from 'react-bootstrap';

import Auth from '../utils/auth'; // Import the Auth variable
import { Link } from 'react-router-dom';
const { Header } = Layout;

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Dashboard</Menu.Item>
          <Menu.Item key="3">
            <Link to="/calories">Count my Calories</Link>
          </Menu.Item>
        </Menu>
        <div>
          {/* <Button type="primary" style={{ marginRight: '10px' }}>Logout</Button> */}
          {Auth.loggedIn() ? (
            <>
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
          )}
        </div>
      </Header>
    </Layout>
  );
};

export default NavBar;
