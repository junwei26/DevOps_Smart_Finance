import React from "react";
import PropTypes from "prop-types";
import { DropdownButton, ButtonGroup } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import "./index.scss";

const NavBar = ({
  chartOption,
  chartOptions,
  setChartOption,
  timeOption,
  timeOptions,
  setTimeOption,
}) => {
  return (
    <div className="container-header">
      <DropdownButton
        as={ButtonGroup}
        variant={"primary"}
        title={chartOptions.find((el) => el.key === chartOption).text}
      >
        {chartOptions.map((option) => (
          <DropdownItem
            key={option.key}
            active={option.key === chartOption}
            onClick={() => setChartOption(option.key)}
          >
            {option.text}
          </DropdownItem>
        ))}
      </DropdownButton>

      <DropdownButton
        className="toggle-period"
        as={ButtonGroup}
        variant={"light"}
        title={timeOptions.find((el) => el.key === timeOption).text}
      >
        {timeOptions.map((option) => (
          <DropdownItem
            key={option.key}
            active={option.key === timeOption}
            onClick={() => setTimeOption(option.key)}
          >
            {option.text}
          </DropdownItem>
        ))}
      </DropdownButton>
    </div>
  );
};

NavBar.propTypes = {
  chartOption: PropTypes.string,
  chartOptions: PropTypes.array,
  setChartOption: PropTypes.func,
  timeOption: PropTypes.string,
  timeOptions: PropTypes.array,
  setTimeOption: PropTypes.func,
};

export default NavBar;
