import React from "react";
import styles from "./Contact.module.css";

//Tương tự phần trước
const Contact = () => {
  return (
    <div>
      <div className={styles["homepage-form__container"]}>
        <h1>Save time, save money!</h1>
        <div>Sign-up and we'll send the best deals to you</div>
        <div className={styles["input-button__form"]}>
          <input type="email" placeholder="Your Email"></input>
          <span>
            <button>Subscribe</button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
