import "./Subheader.scss";
import React from "react";

//prettier-ignore
const subheader = () => {
    return ( 
    <div className= "containers">
        <h2 className = "nameTitle">Name</h2>
        <h2 className = "budgetTitle">Budget</h2>
        <h2 className = "savingsTitle">Savings</h2>
        <h2 className = "typeTitle">Type</h2>
    </div>
    )
}

export default subheader;

/*
    <h2 className = "savingsTitle">Savings</h2>
    <h2 className = "typeTitle">Type</h2>
*/
