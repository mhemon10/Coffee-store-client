import React from 'react';
import CoffeeHeroSection from '../../components/home/HeroSection';
import PopularProducts from '../../components/home/PropularProduct';
import InstagramFollow from '../../components/home/InstragramFollow';

const Home = () => {
    return (
        <div>
            <CoffeeHeroSection></CoffeeHeroSection>
            <PopularProducts></PopularProducts>
            <InstagramFollow></InstagramFollow>
        </div>
    );
};

export default Home;