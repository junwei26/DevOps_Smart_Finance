import React, { useState } from "react";
import "./index.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
//import { Redirect } from "react-router-dom";
axios.defaults.timeout = 5000;
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const authenticate = (email, password) => {
  if (email.length <= 0) {
    alert("Email cannot be empty!");
  } else if (!regex.test(email)) {
    alert("Please enter valid email address!");
  } else if (password.length <= 0) {
    alert("Password cannot be empty!");
  } else {
    //fetch request
    axios
      .post("http://localhost:8080/api/users/login", { user: email, pass: password })
      .then((response) => {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ isLoggedIn: true, token: response.token })
        );
        window.alert("in");
      })
      .catch((error) => window.alert(error));
  }
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="title">Login</div>
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          onClick={() => {
            authenticate(email, password);
            // window.location.reload(false);
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
