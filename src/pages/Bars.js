import React from 'react';
import { Bar } from "react-chartjs-2";

function Bars() {
return (
	<div className="App">
	<div style={{ maxWidth: "700px" }}>
		<Bar
		data={{
			
			labels: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "," "," "," ", " ", " ", " ", " ", " ", " ", " ", " ", " "," "," " ],
			datasets: [
			{
			
				
			
				data: [950, 900, 613, 900, 900, 980, 950, 980, 900,930,600,970,950, 900, 613, 900, 900, 980, 950, 980, 900,930,600,970,],
				
				backgroundColor: ["#816bff", "#816bff", "#816bff", "#816bff", "#816bff", "#816bff","#816bff", "#816bff","#816bff","#816bff","#816bff","#816bff","#816bff", "#816bff", "#816bff", "#816bff", "#816bff", "#816bff","#816bff", "#816bff","#816bff","#816bff","#816bff","#816bff"],
				
				borderColor: ["#816bff", "#816bff", "#816bff", "#816bff", "#816bff", "#816bff","#816bff", "#816bff","#816bff","#816bff","#816bff","#816bff","#816bff", "#816bff", "#816bff", "#816bff", "#816bff","#816bff","#816bff", "#816bff","#816bff","#816bff","#816bff","#816bff"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default Bars;
