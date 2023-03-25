import React from 'react'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { Outlet} from "react-router-dom";

  const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
};



export default Layout