import React, { useState } from 'react';
import './HomeContent.css';
import Bike from '../../images/bike.png';
import car from '../../images/car.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';
import HomeDetails from '../HomeDetails/HomeDetails';
const rides = [
    {
        image : Bike,
        name : 'Bike'
    },
    {
        image : car,
        name : 'Car'
    },
    {
        image : bus,
        name : 'Bus'
    },
    {
        image : train,
        name : 'Train'
    }
]
const HomeContent = () => {
    return (
        <div className='row mt-5'>
            <div className="conntainer m-auto d-flex">
                {
                    rides.map(ride => <HomeDetails ride = {ride}></HomeDetails>)
                }
            </div>
        </div>
    );
};



export default HomeContent;