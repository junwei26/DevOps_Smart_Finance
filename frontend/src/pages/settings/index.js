import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.scss";

const Settings = () => {
  const [username, onChangeUsername] = useState("");
  const [oldPassword, onChangeOldPassword] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [repeatPassword, onChangeRepeatPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
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
              type="text"
              name="oldPassword"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => onChangeOldPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <Form.Control
              type="text"
              name="newPassword"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => onChangeNewPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <Form.Control
              type="text"
              name="repPassword"
              placeholder="Repeat your new password"
              value={repeatPassword}
              onChange={(e) => onChangeRepeatPassword(e.target.value)}
            />
          </div>
        </div>
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
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./index.scss";
// // import axios from "axios";

// const Settings = () => {
//   const [username] = useState("");
//   const [oldPassword] = useState("");
//   const [newPassword] = useState("");
//   const [repeatPassword] = useState("");

//   return (
//     <div className="container">
//       <div className="title">Settings</div>
//       <div className="image">
//         <imgserve
//           className="image-frame"
//           src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
//         />
//         <input className="file-upload" type="file" name="file" />
//       </div>
//       <Form onSubmit={this.onSubmit}>
//         <div className="fields-form">
//           <div className="field">
//             <Form.Control
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//               value={username}
//               // onChange={}
//             />
//           </div>
//           <div className="field">
//             <Form.Control
//               type="text"
//               name="oldPassword"
//               placeholder="Enter your old password"
//               value={oldPassword}
//               // onChange={}
//             />
//           </div>
//           <div className="field">
//             <Form.Control
//               type="text"
//               name="newPassword"
//               placeholder="Enter your new password"
//               value={newPassword}
//               // onChange={}
//             />
//           </div>
//           <div className="field">
//             <Form.Control
//               type="text"
//               name="repPassword"
//               placeholder="Repeat your new password"
//               value={repeatPassword}
//               // onChange={}
//             />
//           </div>
//         </div>
//         <div className="submit-button">
//           <Button variant="success" type="submit">
//             Submit
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Settings;

// export default class Settings extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
//     this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: "",
//       password: "",
//       newPassword: "",
//       repeatPassword: "",
//     };
//   }

//   // Obtain the old password that is filled in the form
//   onChangePassword(e) {
//     this.setState({ password: e.target.value });
//   }

//   // Obtain the new password that is filled in the form
//   onChangeNewPassword(e) {
//     this.setState({ newPassword: e.target.value });
//   }

//   // Obtain the repeat password that is filled in the form
//   onChangeRepeatPassword(e) {
//     this.setState({ repeatPassword: e.target.value });
//   }

//   // Obtain the username that is filled in the form
//   onChangeUsername(e) {
//     this.setState({ username: e.target.value });
//   }

//   // todo: check if username-password is correct
//   onSubmit(e) {
//     e.preventDefault();
//     const url =
//       "http://localhost:8080/api/users/delete?user={String(this.state.username)}&pass={String(this.state.password)}";
//     axios
//       .get(url)
//       .then(() => {
//         if (this.state.newPassword == this.state.repeatPassword) {
//           alert("Details have been changed successfully!");
//         } else {
//           alert("New passwords and repeat passwords do not match. Please try again!");
//         }
//       })
//       .catch((error) => {
//         const usernameErrorMessage = "duplicate key error collection";
//         if (error.response.data.message.includes(usernameErrorMessage)) {
//           alert("Please try another username!");
//         } else {
//           alert("Username does not exist! Please try again!");
//         }
//       });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="title">Settings</div>
//         <div className="image">
//           <img
//             className="image-frame"
//             src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
//           />
//           <input className="file-upload" type="file" name="file" />
//         </div>
//         <Form onSubmit={this.onSubmit}>
//           <div className="fields-form">
//             <div className="field">
//               <Form.Control
//                 type="text"
//                 name="username"
//                 placeholder="Enter your username"
//                 value={this.state.username}
//                 onChange={this.onChangeUsername}
//               />
//             </div>
//             <div className="field">
//               <Form.Control
//                 type="text"
//                 name="oldPassword"
//                 placeholder="Enter your old password"
//                 value={this.state.password}
//                 onChange={this.onChangePassword}
//               />
//             </div>
//             <div className="field">
//               <Form.Control
//                 type="text"
//                 name="newPassword"
//                 placeholder="Enter your new password"
//                 value={this.state.newPassword}
//                 onChange={this.onChangeNewPassword}
//               />
//             </div>
//             <div className="field">
//               <Form.Control
//                 type="text"
//                 name="repPassword"
//                 placeholder="Repeat your new password"
//                 value={this.state.repeatPassword}
//                 onChange={this.onChangeRepeatPassword}
//               />
//             </div>
//           </div>
//           <div className="submit-button">
//             <Button variant="success" type="submit">
//               Submit
//             </Button>
//           </div>
//         </Form>
//       </div>
//     );
//   }
// }
