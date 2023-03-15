import React from 'react'
import Navbar from './RouterLayout/Navbar'
import Footer from './RouterLayout/Footer'
import { Outlet} from "react-router-dom";

  const RouterLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
};



export default RouterLayout