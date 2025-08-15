import React from 'react';
import Hero from '../Components/Hero';
import Services from './Servieces';
import About from '../Components/About';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Services></Services>

            
             <Contact></Contact>
        </div>
    );
};

export default Home;