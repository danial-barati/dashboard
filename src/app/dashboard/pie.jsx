import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Hostiran" },
  { id: 1, value: 15, label: "Nobitex" },
  { id: 2, value: 20, label: "Filimo" },
];

export default function PieActiveArc() {
  return (
    <div className="w-full  md:w-1/3 md:p-3 p-1">
      <div className="w-full flex h-full items-center  justify-center bg-[#1f1f2b] rounded-[10px] p-5">
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={200}
          sx={{
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
          }}
        />
      </div>
    </div>
  );
}
