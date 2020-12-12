import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";

const Settings = () => {
  return (
    <div className="container">
      <div className="title">Settings</div>
      <Form>
        <div>
          <Form.Control type="text" name="username" placeholder="Enter your username" />
        </div>
        <div>
          <Form.Control type="text" name="oldPassword" placeholder="Enter your old password" />
        </div>
        <div>
          <Form.Control type="text" name="newPassword" placeholder="Enter your new password" />
        </div>
        <div>
          <Form.Control type="text" name="repeatPassword" placeholder="Repeat your new password" />
        </div>
        <div>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Settings;
