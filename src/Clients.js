import React from "react";
import Bars from './Bars';
import './Clients.css'
export default function Clients() {

    return(
       
        <div className="card">
            <div className="card-inner">
              <div className="card-title-group m-4">
                  <div className="card-title d-flex">
                      Total Number of Clients
                  </div>
              </div>

              <div className="data">
                  <div className="data-group">
                      <div className="ammount ml-4 mb-2">
                      23,463.35
                      </div>
                      <div>
                          <h6 className="sub-title ml-4 d-flex">Clients over time</h6>
                      </div>
                  </div>
              </div>
              <Bars />
            </div>
        </div>
        
    )
}