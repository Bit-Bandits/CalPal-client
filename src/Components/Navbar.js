// import React from 'react';
// import { Layout, Menu } from 'antd';
// // import { Nav } from 'react-bootstrap';

// import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';
// const { Header } = Layout;

// const Navbar = () => {
//   const handleLogoutClick = () => {
//     Auth.logout();
//   };

//   return (
//     <Layout className="layout">
//       <Header style={{ display: 'flex', justifyContent: 'center' }}>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
//           <Menu.Item key="1">
//             <Link to="/">Home</Link>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <Link to="/dashboard">Dashboard</Link>
//           </Menu.Item>
//           <Menu.Item key="3">
//             <Link to="/calories">Count my Calories</Link>
//           </Menu.Item>
//           <Menu.Item key="4">
//             <Link to="/about-us">About Us</Link>
//           </Menu.Item>
//         </Menu>
//         <div>
//           {console.log(Auth.loggedIn())};
//           {Auth.loggedIn() ? (
//             <>
//               <Link onClick={handleLogoutClick}>Logout</Link>
//             </>
//           ) : (
//             <Link onClick={() => (window.location.pathname = '/login')}>
//               Login
//             </Link>
//           )}
//         </div>
//       </Header>
//     </Layout>
//   );
// };

// export default Navbar;
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'





const navigation = [
  { name: 'Home', href: '#'},
  { name: 'Count my calories', href: '#'},
  { name: 'Dashboard', href: '#' },
  { name: 'About us', href: '#' },
  
  


]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  return (
    <Disclosure as="nav" className="bg-cyan-600  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex h-32 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center  ">
  
                <div className="sm:ml-6 sm:block  ">
                  <div className="flex space-x-20 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            props.currentPage == item.name ? 'bg-lime-300 bg-blue-400' : 'bg-blue-400 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={props.currentPage == item.name ? 'page' : undefined}
                        onClick={() => {
                            props.setCurrentPage(item.name)
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      
              {/* <img
                        className="h-40 w-40 rounded-full"
                        src={avatar}
                        alt=""
                      />
                */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
