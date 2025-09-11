import { scaleLinear, scaleLog } from "@visx/scale";
import React from "react";

const Test = () => {
    // get data
    
    // setup graph
    const width = 750;
    const height = 400;

    const margin = {
        top: 60,
        bottom: 60,
        left: 80,
        right: 80,
    };
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // getting x and y values is a function.
    const x = () => {

    }

    const y = () => {
        
    }

    const xScale = scaleLog({
        range: [20, 20_000],
        domain: [x]
    })

    const yScale = scaleLinear({
        range: [70, 120],
        domain: [y]
    })

    return <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>

        </g>
    </svg>;
};

export default Test;
