import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BarLoader from "react-spinners/BarLoader";
import "./index.scss";
import axios from "axios";

const Settings = () => {
  const [username, onChangeUsername] = useState("");
  const [oldPassword, onChangeOldPassword] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [repeatPassword, onChangeRepeatPassword] = useState("");
  const [color] = useState("#ffffff");
  let [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/api/users/update?user=${String(username)}&pass=${String(
      newPassword
    )}`;
    if (newPassword == repeatPassword) {
      setLoading(true);
      axios
        .get(url)
        .then(() => {
          setLoading(false);
          alert("Details have been changed successfully!");
        })
        .catch((error) => {
          if (error.response.status == 500) {
            alert("Please try another username!");
          } else {
            alert("Username does not exist! Please try again!");
          }
        });
    } else {
      alert("New passwords and repeat passwords do not match. Please try again!");
    }
  };

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
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => onChangeUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <Form.Control
              type="password"
              name="oldPassword"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => onChangeOldPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <Form.Control
              type="password"
              name="newPassword"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => onChangeNewPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <Form.Control
              type="password"
              name="repPassword"
              placeholder="Repeat your new password"
              value={repeatPassword}
              onChange={(e) => onChangeRepeatPassword(e.target.value)}
            />
          </div>
        </div>
        <BarLoader className="barLoader" color={color} loading={loading} size={200} />
        <div className="submit-button">
          <Button variant="success" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Settings;
