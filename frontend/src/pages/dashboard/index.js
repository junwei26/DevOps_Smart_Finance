import React, { useState, useEffect } from "react";
import "./index.scss";
import accountService from "../../services/accounts";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const AccountList = (props) => {
  const parsedAccList = props.accountList.map((account) => JSON.parse(account));
  return (
    <tbody>
      {parsedAccList.map((acc) => (
        <tr key={acc.name}>
          <td>{acc.name}</td>
          <td>{acc.amount}</td>
        </tr>
      ))}
    </tbody>
  );
};

const Dashboard = () => {
  const test = { name: "CCA", amount: 10 };
  const [accounts, setAccounts] = useState([JSON.stringify(test), JSON.stringify(test)]);
  const [cash, setCash] = useState(0);

  useEffect(() => {
    accountService.getAccounts().then((response) => {
      setAccounts(response.data);
      setCash(accounts.reduce((total, acc) => total + JSON.parse(acc).amount));
    });
  }, []);

  return (
    <div className="container">
      <div>{accounts}</div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Cash</th>
            <th>{cash}</th>
          </tr>
        </thead>
        <AccountList accountList={accounts} />
      </Table>
    </div>
  );
};
AccountList.propTypes = {
  accountList: PropTypes.array,
};
export default Dashboard;
