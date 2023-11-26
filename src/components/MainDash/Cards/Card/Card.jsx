import React, { useState } from "react";

import { motion, LayoutGroup } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./custom.css";

import Chart from "react-apexcharts";
import style from "./Card.module.scss";

// parent Card
const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <LayoutGroup>
            {expanded ? (
                <ExpandedCard
                    param={props}
                    setExpanded={() => setExpanded(false)}
                />
            ) : (
                <CompactCard
                    param={props}
                    setExpanded={() => setExpanded(true)}
                />
            )}
        </LayoutGroup>
    );
};

function CompactCard({ param, setExpanded }) {
    const Png = param.png;
    const myStyles = {
        width: "4rem !important",
        overflow: "visible",
        path: {
            stroke: "white !important",
            strokeWidth: "12px !important",
        },
    };

    return (
        <motion.div
            className={style.CompactCard}
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="compactCard"
            onClick={setExpanded}
        >
            <div className={style.radialBar}>
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className={style.detail}>
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
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
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div
            className={style.ExpandedCard}
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow,
            }}
            layoutId="expandedCard"
        >
            <div
                style={{
                    alignSelf: "flex-end",
                    cursor: "pointer",
                    color: "white",
                }}
            >
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{param.title}</span>
            <div className={style.chartContainer}>
                <Chart
                    series={param.series}
                    type="area"
                    options={data.options}
                />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

export default Card;
