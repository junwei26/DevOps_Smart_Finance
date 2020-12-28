import React from "react";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="contents">
        <h1 className="welcome">Welcome to SmartFinance!</h1>
        <p className="subtitle">Your personal finance manager.</p>
        <p className="description">
          Track and record your expenses, savings and even receive alerts to reach your financial
          goals!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
