import React from 'react';
import HomeContent from '../HomeContent/HomeContent';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Home;