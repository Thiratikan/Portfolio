import React from "react";
import { CONTACT } from "../style/stylingInfo";

function Contact() {
  return (
    <CONTACT>
      <a id="contact" href="https://github.com/Thiratikan">
        <img src="/images/github-mark.png" alt="" />
      </a>

      <a id="contact" href="https://www.linkedin.com/in/thiratikan">
        <img src="/images/in.png" alt="" />
      </a>
      <a id="contact" href="https://devpost.com/thiratikan">
        <img src="/images/devpost.png" alt="" />
      </a>
      <h1>thiratikan@gmail.com</h1>
      <div>
        <h1>COPYRIGHT©2023 </h1>
        <h1 className="name">THIRATIKAN</h1>
        <h1>ALL RIGHTS RESERVED</h1>
      </div>
    </CONTACT>
  );
}

export default Contact;
