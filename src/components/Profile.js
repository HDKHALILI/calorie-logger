import React from "react";

import "../styles/Profile.css";
import avatar from "../images/avatar.jpg";
function Profile() {
  return (
    <div className="Profile">
      <div className="_Profile">
        <div className="Profile-meta">
          <p className="normal-text">57</p>
          <p className="small-text">kg</p>
        </div>
        <img src={avatar} className="avatar" alt="Jane Appleseed" />
        <div className="Profile-meta">
          <p className="normal-text">163</p>
          <p className="small-text">cm</p>
        </div>
      </div>
      <h1 className="name">
        <span>Jane</span> Appleseed
      </h1>
    </div>
  );
}

export default Profile;
