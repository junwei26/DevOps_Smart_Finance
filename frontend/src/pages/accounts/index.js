import React from "react";
import "./index.scss";
import { Button } from "react-bootstrap";

const Accounts = () => {
  return (
    /*prettier-ignore*/
    <div className="container">
      <div className="title">Accounts</div>
      <div className="subheader-container">
        <h2 className="subheader-name-title">Name</h2>
        <h2 className="subheader-budget-title">Budget</h2>
        <h2 className="subheader-savings-title">Savings</h2>
        <h2 className="subheader-type-title">Type</h2>
      </div>

      <div className="amounts-container">
        <h2 className="amounts-name-of-cca">Fintech Society</h2>
        <h2 className="amounts-budget-amount">1500</h2>
        <h2 className="amounts-savings-amount">$40</h2>
        <h2 className="amounts-type-of-amount"> wallet</h2>
      </div>

      <Button
        variant="btn btn-success"
        className="button-design">
        
        Add Wallet
      </Button>

      <div className="total-container">
        <div className="total-sub-container">
          <h2 className="total-header-balance">Total Balance</h2>
          <h2 className="total-header-monthly-change">Monthly Change</h2>
        </div>
        <div className="total-sub-container">
          <h2 className="total-balance">$1000</h2>
          <h2 className="total-monthly-change">-$300</h2>
        </div>
      </div>

    </div>
  );
};

export default Accounts;
