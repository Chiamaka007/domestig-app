import React from "react";
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";

const data = {
  labels: ["", "","","","","","","","","",""],
  datasets: [
    
    {
      
      data: [50, 43, 65, 41, 50, 45, 40,50, 60],
      fill: true,
      backgroundColor: "#7a3fff",
      borderColor: "#816bff"
    }
  ]
};

export default function Lines() {
  return (
    <div className="Lines">
      <Line data={data} />
    </div>
  );
}
