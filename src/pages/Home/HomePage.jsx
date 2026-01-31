import React from 'react';
import CoffeeHeroSection from '../../components/home/HeroSection';
import PopularProducts from '../../components/home/PropularProduct';
import InstagramCups from '../../components/home/InstragramFollow';


const Home = () => {
    return (
        <div>
            <CoffeeHeroSection></CoffeeHeroSection>
            <PopularProducts></PopularProducts>
            <InstagramCups></InstagramCups>
            
        </div>
    );
};

export default Home;