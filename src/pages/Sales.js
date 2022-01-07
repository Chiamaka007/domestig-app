import React from 'react';
import Lines from './Lines';

import './Sales.css';


export default function Sales() {
    
    return(
        
        <div className="card">
       <div className="card-body card-inner card-background">
        <div className="card-title-group">
        <div className="card-title ">Total Sales</div>  
        <div className="card-tools"><a href="#">View report</a></div>
        </div>  
        <div className="data">
          <div className="ammount d-flex mb-3">₦ 74,958.49</div>
          <div className="info d-flex mb-5">
            <strong>₦ 7,395.37 </strong>
                 in the last month
          </div>
        </div>  
        <div className="data">
          <h6 className="sub-title d-flex">This week so far</h6>
          <div className="data-group">
            <div className="ammount d-flex">₦ 1,338.72</div>
          </div>
        </div>
        <Lines />
       </div>
      </div>
      
)
}