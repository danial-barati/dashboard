import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
const xLabels = [
  "Tehran",
  "Rasht",
  "ardebil",
  "Isfahan",
  "Shiraz",
  "Mashhad",
  "Kish",
];

export default function StackedAreaChart() {
  return (
    <div className="w-full  md:w-1/3 md:p-3 p-1 mt-4 md:mt-0">
      <div className="w-full flex justify-center bg-[#1f1f2b] rounded-[10px] p-5">
        <LineChart
          width={500}
          height={300}
          series={[
            {
              data: uData,
              label: "uv",
              area: true,
              stack: "total",
              showMark: false,
            },
            {
              data: pData,
              label: "pv",
              area: true,
              stack: "total",
              showMark: false,
            },
            {
              data: amtData,
              label: "amt",
              area: true,
              stack: "total",
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            [`& .${lineElementClasses.root}`]: {
              display: "none",
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
          }}
        />
      </div>
    </div>
  );
}
