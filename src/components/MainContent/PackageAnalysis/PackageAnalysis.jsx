import { React, useState, useEffect } from "react";
import style from "./PackageAnalysis.module.scss";

import Chart from "react-apexcharts";

export default function PackageAnalysis(props) {
    const data = {
        series: [
            {
                name: "Gói hàng",
                data: [10, 50, 30, 90, 40, 120, 100],
            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["#ff929f"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2023-09-19T00:00:00.000Z",
                    "2023-09-19T01:30:00.000Z",
                    "2023-09-19T02:30:00.000Z",
                    "2023-09-19T03:30:00.000Z",
                    "2023-09-19T04:30:00.000Z",
                    "2023-09-19T05:30:00.000Z",
                    "2023-09-19T06:30:00.000Z",
                ],
            },
            yaxis: {
                show: false,
            },
            toolbar: {
                show: false,
            },
        },
    };

    return (
        <div className={style.layout}>
            <Chart
                className={style.chart}
                options={data.options}
                series={data.series}
                type="area"
            />
        </div>
    );
}
