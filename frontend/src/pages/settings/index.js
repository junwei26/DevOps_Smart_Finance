import React from "react";
import "./index.scss";

const Settings = () => {
  return (
    <div className="container">
      <div className="title">Settings</div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Enter your username" />
        </div>
        <div>
          <input type="text" name="username" placeholder="Enter your old password" />
        </div>
        <div>
          <input type="text" name="username" placeholder="Enter your new password" />
        </div>
        <div>
          <input type="text" name="username" placeholder="Repeat your new password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
