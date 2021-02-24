import React from "react";
import PropTypes from "prop-types";
import range from "lodash/range";
import getDaysInMonth from "date-fns/getDaysInMonth";
import format from "date-fns/format";
import ChartistGraph from "react-chartist";
import Chartist from "chartist";
import abbreviate from "number-abbreviate";
import "./index.scss";
import "chartist-plugin-tooltips";
import "chartist/dist/chartist.min.css";
import "chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css";

const BarChart = ({ timeOption, date }) => {
  const labels =
    timeOption === "yearly"
      ? range(0, 12).map((month) => format(new Date().setMonth(month), "MMM"))
      : range(1, getDaysInMonth(new Date(date.getFullYear(), date.getMonth())) + 1).map((day) =>
          `${day}`.padStart(2, "0")
        );
  const series = [new Array(labels.length).fill(0), new Array(labels.length).fill(0)];
  const options = {
    axisY: {
      labelInterpolationFnc: (value) => abbreviate(value, 2),
    },
    plugins: [
      Chartist.plugins.tooltip({
        class: "mono",
        currency: "$",
        anchorToPoint: true,
      }),
    ],
  };

  return (
    <div className="container-full-page flat container-chart">
      <ChartistGraph
        type="Bar"
        className="ct-octave mt-report-expense-income"
        data={{ labels, series }}
        options={options}
      />
    </div>
  );
};

BarChart.propTypes = {
  timeOption: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default BarChart;
