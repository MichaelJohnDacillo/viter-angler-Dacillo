import React from 'react'
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({children}) => {
  return (
    <>
        <div className="min-h-screen bg-gray-50">
            <Navigation/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    </>
  );
};

export default Layout;