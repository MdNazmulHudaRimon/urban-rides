import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDetails.css';

const HomeDetails = (props) => {
    const {name,image} = props.ride;
    return (
        <div className = 'row'>
            <div className="rides">
                <img src={image} alt=""/>
                <h4 className='text-center mt-4 font'>{name}</h4>
                <Link to = {`/book/${name}`}> <button className='btn book-btn'>Book Now</button> </Link>
            </div>
        </div>
    );
};

export default HomeDetails;