import React, { useState } from "react";
import "./index.scss";
import NavBar from "./navBar.js";

const chartOptions = [
  {
    key: "expense-income",
    value: "expense-income",
    text: "Expense & Income",
  },
  {
    key: "expense-type",
    value: "expense-type",
    text: "Expense by Type",
  },
];

const timeOptions = [
  {
    key: "yearly",
    value: "yearly",
    text: "Yearly",
  },
  {
    key: "monthly",
    value: "monthly",
    text: "Monthly",
  },
];

const Analytics = () => {
  const [chartOption, setChartOption] = useState("expense-income");
  const [timeOption, setTimeOption] = useState("yearly");

  return (
    <div className="container-full-page flat">
      <div className="analytics-title">Analytics</div>
      <NavBar
        chartOption={chartOption}
        chartOptions={chartOptions}
        setChartOption={setChartOption}
        timeOption={timeOption}
        timeOptions={timeOptions}
        setTimeOption={setTimeOption}
      />
    </div>
  );
};

export default Analytics;
