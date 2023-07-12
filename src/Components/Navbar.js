import React from 'react';
import svgLogo from '../assets/logo.png';
// import { Layout, Menu } from 'antd';
// import { Nav } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';
// const { Header } = Layout;

const Navbar = () => {
  const handleLogoutClick = () => {
    Auth.logout();
  };
  const logo = [
    {
      src : svgLogo,
      

    }
  ]

  return (
    <nav className="flex justify-center text-center bg-[#35CBD2] py-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
       <img src={logo[0].src} alt="logo" className="h-40 w-15 mr-3" />
        <span className="font-semibold text-3xl tracking-tight">Calpal</span>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div> */}
      <div className="w-full  flex-grow lg:flex lg:items-center lg:w-auto  ">
        <div className=" flex text-lg:flex-grow ">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Dashboard
          </a>
          <a href="/calories" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Count my Calories
          </a>
          <a href="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            About Us
          </a>
        </div>
        <div className='flex p-12'>
          {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={handleLogoutClick} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</a>
            </>
          ) : (
            <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
          )}


        </div>
      </div>
    </nav>
    // <Layout className="layout">
    //   <Header style={{ display: 'flex', justifyContent: 'center' }}>
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    //       <Menu.Item key="1">
    //         <Link to="/">Home</Link>
    //       </Menu.Item>
    //       <Menu.Item key="2">
    //         <Link to="/dashboard">Dashboard</Link>
    //       </Menu.Item>
    //       <Menu.Item key="3">
    //         <Link to="/calories">Count my Calories</Link>
    //       </Menu.Item>
    //       <Menu.Item key="4">
    //         <Link to="/about-us">About Us</Link>
    //       </Menu.Item>
    //     </Menu>
    //     <div>
    //       {console.log(Auth.loggedIn())};
    // {Auth.loggedIn() ? (
    //   <>
    //     <Link onClick={handleLogoutClick}>Logout</Link>
    //   </>
    // ) : (
    //   <Link onClick={() => (window.location.pathname = '/login')}>
    //     Login
    //   </Link>
    // )}
    //     </div>
    //   </Header>
    // </Layout>
  );
};

export default Navbar;
