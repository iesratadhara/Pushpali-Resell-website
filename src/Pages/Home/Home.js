import React from 'react';
import Adverties from './Adverties/Adverties';
import CategorySec from './CategorySec';
import Hero from './Hero';

const Home = () => {
    return (
        <div >
             <Hero></Hero>
             <CategorySec></CategorySec>
             <Adverties></Adverties>
        </div>
    );
};

export default Home;