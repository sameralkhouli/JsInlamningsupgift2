import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import React, { useState , useEffect } from 'react'

// Routes
import Customer from './components/Customer';
import Home from './components/Home';
import CustomerDetails from './components/CustomerDetails';



function App() {

  const [customer, setCustomer] = useState([])

  useEffect(() => {
      async function fetchData() {
          const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
          const data = await res.json()
          
          setCustomer(data)
        }
        fetchData();
  },[])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/customer" exact>
          <Customer customer={customer} />
        </Route>
        <Route path="/customer/customer/:id" exact>
          <CustomerDetails customer={customer} />
        </Route>
     
        <Route path="/Home" exact component={Home} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
