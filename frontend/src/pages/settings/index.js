import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";

const Settings = () => {
  return (
    <div className="container">
      <div className="title">Settings</div>
      <div className="image">
        <img
          className="image-frame"
          src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        />
        <input className="file-upload" type="file" name="file" />
      </div>
      <Form>
        <div className="fields-form">
          <div className="field">
            <Form.Control type="text" name="username" placeholder="Enter your username" />
          </div>
          <div className="field">
            <Form.Control type="text" name="oldPassword" placeholder="Enter your old password" />
          </div>
          <div className="field">
            <Form.Control type="text" name="newPassword" placeholder="Enter your new password" />
          </div>
          <div className="field">
            <Form.Control type="text" name="repPassword" placeholder="Repeat your new password" />
          </div>
        </div>
        <div className="submit-button">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Settings;
