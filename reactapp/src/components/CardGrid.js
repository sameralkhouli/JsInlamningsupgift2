import React, { useState, useEffect } from 'react'
import Card from './Card'
import {Link} from 'react-router-dom'

const CardGrid = ({customer}) => {



    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                customer.map(customer => (  
                    <div className="col">
                        <Link to={`customer/customer/${customer.id}`} style={{ textDecoration: 'none'}} ><Card key={customer.id} item={customer} /></Link>
                    </div>
                ))
            }
        </div>
    )
}

export default CardGrid
