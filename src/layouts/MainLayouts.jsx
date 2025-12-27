import React from 'react';
import Header from '../components/home/Header';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;