import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";
import axios from "axios";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      newPassword: "",
      repeatPassword: "",
    };
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeNewPassword(e) {
    this.setState({ newPassword: e.target.value });
  }

  onChangeRepeatPassword(e) {
    this.setState({ repeatPassword: e.target.value });
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:8080/api/users?user=" + String(this.state.username);
    axios
      .get(url)
      .then((res) => {
        console.log("no error");
        console.log(res.data);
        if (this.state.newPassword == this.state.repeatPassword) {
          alert("Change password");
        } else {
          alert("New passwords and repeat passwords do not match. Please try again!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Username does not exist! Please try again!");
      });
  }

  render() {
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
        <Form onSubmit={this.onSubmit}>
          <div className="fields-form">
            <div className="field">
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="field">
              <Form.Control
                type="text"
                name="oldPassword"
                placeholder="Enter your old password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="field">
              <Form.Control
                type="text"
                name="newPassword"
                placeholder="Enter your new password"
                value={this.state.newPassword}
                onChange={this.onChangeNewPassword}
              />
            </div>
            <div className="field">
              <Form.Control
                type="text"
                name="repPassword"
                placeholder="Repeat your new password"
                value={this.state.repeatPassword}
                onChange={this.onChangeRepeatPassword}
              />
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
  }
}
