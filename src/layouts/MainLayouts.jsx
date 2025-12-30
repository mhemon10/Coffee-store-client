import React from 'react';
import Header from '../components/home/Header';
import { Outlet } from 'react-router';
import Footer from '../components/home/Footer';


const MainLayouts = () => {
    return (
      <div>
        <Header></Header>
        <div >
          <Outlet></Outlet>
            </div>
            <Footer></Footer>
      </div>
    );
};

export default MainLayouts;