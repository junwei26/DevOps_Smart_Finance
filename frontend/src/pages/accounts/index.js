import React from "react";
import "./index.scss";
import Subheader from "./Subheader.js";
import Amounts from "./Amounts.js";
import Total from "./Total.js";

//prettier-ignore
const Accounts = () => {
  return (
    <div className="container">
      <div className="title">Accounts</div>
      <div><Subheader></Subheader></div>
      <div><Amounts></Amounts></div>
      <div><Amounts></Amounts></div>
      <div><Amounts></Amounts></div>
      <div><Amounts></Amounts></div>
      <div><Amounts></Amounts></div>
      <div> <p> </p> <p> </p> </div>
      <div><button>Add Wallet</button></div>
      <div> <p> </p> <p> </p> </div>
      <div><Total></Total></div>
    </div>
  );
};

export default Accounts;
