import "./Total.scss";
import React from "react";

//prettier-ignore
const total = () => {
    return ( 
        <div className= "container_total">
        <div className = "subContainer_total">
            <h2 className = "total_header_balance">Total Balance</h2>
            <h2 className = "total_header_monthly_change">Monthly Change</h2>
        </div>
        <div className = "subContainer_total">
            <h2 className = "total_balance">$100000</h2>
            <h2 className = "monthly_change">-$300</h2>
        </div>
        </div>
    )
}

export default total;
