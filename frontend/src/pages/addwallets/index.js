import React from "react";
import "./index.scss";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const wallets = () => {
  return (
    <div className="addwallets-container">
      <div className="title">Create a new wallet</div>
      {/* prettier-ignore */}
      <div className="addwallets-fields-form">
        <Form>
          <div className="test">
            <div className="profile-image">
              <img className="size" src="https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg"/>
            </div>
            <div className="addwallets-field">
              <Form.Control type="text" name="InputName" placeholder="Name"/>
            </div>
          </div>
          <div>
            <div className="balance-image">
              <img className="size" src="https://www.flaticon.com/svg/static/icons/svg/214/214362.svg"/>
            </div>
            <div className="addwallets-field">
              <Form.Control type="text" name="initialBal" placeholder="Initial Balance" />
            </div>
          </div>
          <div>
            <div className="savings-image">
              <img className="size" src="https://www.flaticon.com/svg/static/icons/svg/2916/2916103.svg"/>
            </div>
            <div className="addwallets-field">
              <Form.Control type="text" name="intendedSavings" placeholder="Intended Savings" />
            </div>
          </div>
          <div>
            <div className="budget-image">
              <img className="size" src="https://www.flaticon.com/svg/static/icons/svg/2942/2942269.svg"/>
            </div>
            <div className="addwallets-field">
              <Form.Control type="text" name="budget" placeholder="Wallet Budget" />
            </div>
          </div>
        </Form>
      </div>
      <Button className="button-design">Create</Button>
    </div>
  );
};

export default wallets;
