import React from "react";
import ReactEcharts from "echarts-for-react";

const LineArea = ({style}) => {
 const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };
  return <ReactEcharts option={option} style={style} />;

};
export default LineArea;