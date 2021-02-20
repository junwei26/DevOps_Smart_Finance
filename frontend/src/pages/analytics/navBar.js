import React from "react";
import PropTypes from "prop-types";
import { Button, DropdownButton, ButtonGroup } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./index.scss";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import addYears from "date-fns/addYears";

const NavBar = ({
  chartOption,
  chartOptions,
  setChartOption,
  timeOption,
  timeOptions,
  setTimeOption,
  date,
  setDate,
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

      <Button
        className="button-chevron-left"
        variant="light"
        onClick={() => {
          timeOption === "yearly" ? setDate(addYears(date, -1)) : setDate(addMonths(date, -1));
        }}
      >
        <FaChevronLeft />
      </Button>
      <DropdownButton
        className="toggle-period"
        as={ButtonGroup}
        variant="light"
        title={
          timeOption === "yearly"
            ? date.getFullYear()
            : `${format(date, "MMM")}, ${date.getFullYear()}`
        }
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
      <Button
        className="button-chevron-right"
        variant="light"
        onClick={() => {
          timeOption === "yearly" ? setDate(addYears(date, 1)) : setDate(addMonths(date, 1));
        }}
      >
        <FaChevronRight />
      </Button>
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
  date: PropTypes.instanceOf(Date),
  setDate: PropTypes.func,
};

export default NavBar;
