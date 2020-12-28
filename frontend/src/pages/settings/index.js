import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";
import axios from "axios";

// const Settings = () => {
//   const [username, setUsername] = useState("");
//   const onSubmit = () => {
//     alert(username);
//   };

//   return (
//     <div className="container">
//       <div className="title">Settings</div>
//       <div className="image">
//         <img
//           className="image-frame"
//           src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
//         />
//         <input className="file-upload" type="file" name="file" />
//       </div>
//       <Form>
//         <div className="fields-form">
//           <div className="field">
//             <Form.Control
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <Form.Control type="text" name="oldPassword" placeholder="Enter your old password" />
//           </div>
//           <div className="field">
//             <Form.Control type="text" name="newPassword" placeholder="Enter your new password" />
//           </div>
//           <div className="field">
//             <Form.Control type="text" name="repPassword" placeholder="Repeat your new password" />
//           </div>
//         </div>
//         <div className="submit-button">
//           <Button variant="success" type="submit" onClick={() => onSubmit()}>
//             Submit
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Settings;

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error);
      });
    // alert(this.state.username);
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
  }
}
