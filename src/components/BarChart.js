import React from 'react';
import Plot from 'react-plotly.js';

const BarChart = (props) => {
        return (
            <Plot
                data={[
                 
                    {
                        x: props.v, 
                        y: props.l,
                        type: 'bar',
                        marker: {color: 'darkgrey'}
                    },
                ]}
                layout={{ width: 500, height: 240,paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)' }}
            />
        );
    
}
export default BarChart;