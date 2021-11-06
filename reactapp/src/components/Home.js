import React from 'react'
import './Card.css';

import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="cent container mt-5 " >
                
                <h2>Welcome in our database for customers</h2>
                <h4 className="mb-5"> We still working on it, we need your support</h4>

            <img className="photo shadow"  src="https://images.pexels.com/photos/9718279/pexels-photo-9718279.jpeg?cs=srgb&dl=pexels-sunsetoned-9718279.jpg&fm=jpg" alt="logo"/>
     
                
            </div>           
        </div>
    )
}

export default Home
