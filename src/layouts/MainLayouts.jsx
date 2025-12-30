import React from 'react';
import Header from '../components/home/Header';
import { Outlet } from 'react-router';


const MainLayouts = () => {
    return (
      <div>
        <Header></Header>
        <div >
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayouts;