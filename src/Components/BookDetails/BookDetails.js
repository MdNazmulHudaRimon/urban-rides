import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './BookDetails.css';
import map from '../../images/Map.png'
const BookDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <hr/>
            <div className="container row  booking">
                <div className="col-md-3">
                    <form action="" className='pick-form'>
                        <p>Pick {id} From</p>
                        <input type="text" defaultValue="Mirpur"/>
                        <p>Pick {id} To</p>
                        <input type="text" defaultValue="Dhanmondi"/>
                        <button className='btn btn-warning'>Search</button>
                    </form>
                </div>
                <div className="col-md-6 map">
                    <img src={map} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;