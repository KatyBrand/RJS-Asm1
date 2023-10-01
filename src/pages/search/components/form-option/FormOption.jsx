import React from "react";
import styles from "../searchpopup/SearchPopup.module.css";

const FormOption = () => {
  return (
    <div className={styles["search-form-options-grid-2"]}>
      <div className={styles["search-form__description"]}>
        Min price per night
      </div>
      <input
        className={styles["search-form-option__input"]}
        type="number"
      ></input>
      <div className={styles["search-form__description"]}>
        Max price per night
      </div>
      <input
        className={styles["search-form-option__input"]}
        type="number"
      ></input>
      <div className={styles["search-form__description"]}>Adult</div>
      <input
        className={styles["search-form-option__input"]}
        type="number"
        defaultValue={1}
      ></input>
      <div className={styles["search-form__description"]}>Children</div>
      <input
        className={styles["search-form-option__input"]}
        type="number"
        defaultValue={0}
      ></input>
      <div className={styles["search-form__description"]}>Room</div>
      <input
        className={styles["search-form-option__input"]}
        type="number"
        defaultValue={1}
      ></input>
    </div>
  );
};
export default FormOption;
