import React from "react";
import styles from "../Detail.module.css";
import Button from "./Button";

const Description = (props) => {
  return (
    <div className={styles["detail-description-grid2"]}>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className={styles["detail-description-container"]}>
        <h5>Perfect for a 9-night stay!</h5>
        <p>
          Located in the real heart of Krakow, This property has an excellent
          location score of 9.8!
        </p>
        <div className={styles["detail-price-container"]}>
          <h4>${props.price}</h4>
          <h4 className={styles["price-des"]}>(9 nights)</h4>
        </div>
        <div className={styles["btn-container"]}>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Description;
