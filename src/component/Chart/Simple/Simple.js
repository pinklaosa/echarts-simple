import React from "react";
import ReactEcharts from "echarts-for-react";

const Simple = ({style}) => {

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        smooth: true,
      },
    ],
  };
  return <ReactEcharts option={option} style={style} />;
};

export default Simple;