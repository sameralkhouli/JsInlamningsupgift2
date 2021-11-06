import React from 'react'

import CardGrid from './CardGrid';

// Components
import Navbar from './Navbar';

const Customer = ({customer}) => {
    return (
        <>
            <Navbar />
            
            <div class="container my-5">
                <CardGrid customer={customer} />
            </div>
        </>
    )
}

export default Customer
