import { Link } from '@material-ui/core';
import React from 'react';
import about from '../../assets/images/about.jpg';
import Navbar from '../Shared/Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h2 className='title text-center mt-4'>Your dream Car is <br /> just a click away!</h2>
                <div className='about' style={{ marginTop: '60px' }}>
                    <img style={{ height: '520px' }} className='w-75' src={about} alt="" />
                    <div className='about-package'>
                        <div className='about-card'>
                            <h4 style={{ fontFamily: 'Poppins', fontWeight: '600' }}>Choose Us For Grand Cars!</h4>
                            <p>We will be there for you to make your car travel extraordinary and you will be able to get the best out of it. </p>
                            <Link to='/order' className="cta about-btn">
                                <span>Book Now</span>
                                <svg width="10px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;