import React from 'react';
import './Navbar.css';
import logo from '../../images//Urban Riders.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <section className='mb-5'>
             <nav class="navbar navbar-expand-lg navbar-light  container">
            <div class="container-fluid">
                 <img src={logo} alt=""/>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to = '/' className='nav-link active font'>Home</Link>
                </li>
                <li class="nav-item">
                <Link to = '/book/:id' className='nav-link'>Ride</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <Link to ='/login'> <button className ='btn btn-warning font'>Login</button></Link>
                </li>
            </ul>
            </div>
        </div>
         </nav>
        </section>
      
    );
};

export default Navbar;