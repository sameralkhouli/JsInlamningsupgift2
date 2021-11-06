import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'


import Navbar from './Navbar';

const CustomerDetails = ({customers}) => {

    const { id } = useParams()
    const [customer, setCustomer] = useState({})

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://ecexam-webapi.azurewebsites.net/api/customers/${id}`)
            const data = await res.json()
            
            setCustomer(data)
          }
          fetchData();
    },[])


    return (
        <>
            <Navbar />
            
            <div className="container my-5">
               <div>
                    <h2>{customer.firstName} {customer.lastName}</h2>
                    <p> {customer.email}</p>
               </div>
            </div>
        </>
    )
}

export default CustomerDetails
