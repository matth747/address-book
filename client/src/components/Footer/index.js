import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='headfoot mt-3'>
            
        <footer className='container'>
            <div className='row'>
            <h4 className='col-12 mb-2'>Created by Matthew Hanson</h4>
            <div className='col-2'></div>
            <div className='col-4'>
            <h5>GitHub:</h5>
            <a className='btn btn-info' href='https://github.com/matth747'>Click to Visit</a>
            </div>


            <div className='col-4'>
            <h5>LinkedIn:</h5>
            <a className='btn btn-info mb-3' href='https://www.linkedin.com/in/matthew-hanson-021201261/'>Click to Visit</a>
            </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer;