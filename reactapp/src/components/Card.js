import React from 'react'
import './Card.css'
import { useParams } from 'react-router-dom'
const Card = ({ item }) => {

    const { id } = useParams()
    return (
        <div className="card h-100 ">
            <div class="card-header">
                Customer number {item.id}
            </div>
            <div className="card-body">
                <h5 className="card-title text-dark">{item.firstName} {item.lastName}</h5>
                <p className="card-text text-dark"> {item.email} </p>
            </div>
        </div>
    )
}

export default Card
