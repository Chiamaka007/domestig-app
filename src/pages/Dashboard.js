import React from 'react';
import Clients from './Clients';
import RegisteredDomestics from './RegisteredDomestics';
import Sales from './Sales';
import Service from './Service';
import './dashboard.css';


export default function Dashboard() {
  return (
<div className="container-fluid">
    

    <div className="Dashboard">
    
     <div className='header mt-5'>
       <h4>Dashboard</h4>
       <div className="row">
         <div className="col-md-6">
         <Sales />
         </div>
         <div className="col-md-6">
         <Clients/>
         </div>
         <div className="col m-5">
       <RegisteredDomestics />
       </div>
       </div>
         
      
      
      
     </div>
      </div>
      <div className="service #service ">
    <Service/>
    </div>
    </div>
  );
}

