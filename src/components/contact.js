import React from "react";

import SubHeading from "./SubHeading";
import profile from "../assets/images/bg/profile.jpg"

const Contact = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ color:"white" , marginBottom: "3rem" }}>
        Contact
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__cormorant"
          style={{ color: "white", margin: "2rem 0" }}
        >
          <ul>Nama : Muftia Ryskina</ul>
          <ul>Nim : 2110005</ul>
          <ul>E-mail : Muftiaaar@gmail.com</ul>
        </p>
      </div>
     </div>

    <div className="app__wrapper_img">
      <img src={profile} alt="profile_img" height='500px' />
    </div>
  </div>
);

export default Contact;
