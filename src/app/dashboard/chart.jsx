"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 600,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function BarsDataset() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchdata() {
      const firstdata = await fetch(
        "https://66310ff6c92f351c03dc0fb1.mockapi.io/chartapi"
      );
      const lastdata = await firstdata.json();
      setData(lastdata);
    }
    fetchdata();
  }, []);
  return (
    <BarChart
      dataset={data}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "tehran", label: "Tehran", valueFormatter },
        { dataKey: "rasht", label: "Rasht", valueFormatter },
        { dataKey: "isfahan", label: "Isfahan", valueFormatter },
        { dataKey: "ardebil", label: "Ardebil", valueFormatter },
      ]}
      {...chartSetting}
      sx={{
        //change left yAxis label styles
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
          paddingRight: "50px",
          transform: "translateX(-10px) !important",
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
  );
}
