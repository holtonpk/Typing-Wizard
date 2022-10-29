import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
  const data = {
    labels: ["1/10", "1/11", "1/12", "1/13", "1/14", "1/15", "1/16"],
    datasets: [
      {
        label: "Average Speed",
        data: [40, 55, 57, 60, 66, 70, 75],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#3F52FC",
        fontColor: ["rgba(255,255,255)"],
      },
    ],
  };

  return (
    <div className="z-40 w-1/2 mx-auto mt-20 ">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
