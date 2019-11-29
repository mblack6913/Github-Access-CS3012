import React from 'react';
import Plot from 'react-plotly.js';


const PieChart = (props) => {

    return (
        <Plot data={[
            {
                x: props.v,
                y: props.l,
                type: 'pie'
            }
        ]}
            layout={{ width: 700, height: 500 }}
        />
    );
}

export default PieChart;