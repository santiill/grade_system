import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, pointStyle } from "react-chartjs-2";
import { useSelector } from "react-redux";
// import s from "../Statistic.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StudentGradeStatistics = () => {
  //   const state = useSelector((state) => state.statistics.month);
  //   const florist = state.filter((item) => item.user.user_type == "florist");
  //   console.log("fd: ", florist);
  var data = {
    labels: [
      "Subjects",
      "JavaScript",
      "Data",
      "Python",
      "Java",
      "Web Development",
    ],
    datasets: [
      //   {
      //     label: "Оформил",
      //     data: ["bnm", "vbn"],
      //     pointStyle: "circle",
      //     pointRadius: 10,
      //     pointHoverRadius: 15,
      //     backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      //     borderColor: ["rgba(54, 162, 235, 1)"],
      //     borderWidth: 3,
      //   },
      {
        label: "Grade",
        data: [0, 70, 85, 47, 33, 90],
        pointStyle: "circle",
        pointRadius: 10,
        pointHoverRadius: 15,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 3,
      },
    ],
  };

  var options = {
    type: "line",
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div /* className={s.chart_margin} */>
      <Line data={data} height={400} options={options} />
    </div>
  );
};

export default StudentGradeStatistics;
