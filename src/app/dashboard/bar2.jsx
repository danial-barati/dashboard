import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function BorderRadius() {
  return (
    <div className="w-full  md:w-1/3 md:p-3 p-1 my-4 md:my-0">
      <div className="w-full flex justify-center bg-[#1f1f2b] rounded-[10px] p-5">
        <div style={{ width: "100%" }}>
          <BarChart dataset={dataset} {...chartSetting} />
        </div>
      </div>
    </div>
  );
}

const dataset = [
  [59, 57, 86, 21, "Jan"],
  [50, 52, 78, 28, "Fev"],
  [47, 53, 106, 41, "Mar"],
  [54, 56, 92, 73, "Apr"],
  [57, 69, 92, 99, "May"],
  [60, 63, 103, 144, "June"],
  [59, 60, 105, 319, "July"],
  [65, 60, 106, 249, "Aug"],
  [51, 51, 95, 131, "Sept"],
  [60, 65, 97, 55, "Oct"],
  [67, 64, 76, 48, "Nov"],
  [61, 70, 103, 25, "Dec"],
].map(([london, paris, newYork, seoul, month]) => ({
  london,
  paris,
  newYork,
  seoul,
  month,
}));

const valueFormatter = (value) => `${value}mm`;

const chartSetting = {
  series: [{ dataKey: "seoul", label: "Seoul rainfall", valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
    "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
      strokeWidth: "0.4",
      fill: "#9a9cab",
    },
    // change bottom label styles
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
      strokeWidth: "0.5",
      fill: "#9a9cab",
    },
    "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label": {
      fill: "#9a9cab",
    },
    "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line": {
      stroke: "#9a9cab",
    },

    "& .MuiChartsLegend-series text": {
      fill: "#9a9cab !important",
      fontSize: "14px !important",
    },
    "& .MuiChartsLegend-mark": {
      width: "14px !important",
      height: "14px !important",
    },
    "& .css-1qdzy9k-MuiBarElement-root": {
      fill: "#ada6f2 !important",
    },
  },
};
