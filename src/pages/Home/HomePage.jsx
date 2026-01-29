import React from 'react';
import CoffeeHeroSection from '../../components/home/HeroSection';
import PopularProducts from '../../components/home/PropularProduct';

const Home = () => {
    return (
        <div>
            <CoffeeHeroSection></CoffeeHeroSection>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;