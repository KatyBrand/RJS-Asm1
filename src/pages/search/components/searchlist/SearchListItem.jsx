import React from "react";
import styles from "./SearchList.module.css";

const SearchListItem = (props) => {
  //Hiển thị content tùy loại hotel (có cancel hay ko)
  let content;
  const freeCancelHandler = (canCancel) => {
    if (canCancel) {
      content = (
        <div
          className={`${styles["search-result__free-cancel"]} ${styles["active"]}`}
        >
          <div>Free Cancellation</div>
          <div className={styles["cancel-description"]}>
            You can cancel later, so look in this great price today!
          </div>
        </div>
      );
    }
  };
  freeCancelHandler(props.freeCancel);
  return (
    <div className={styles["search-result__container"]}>
      <img src={props.imageUrl}></img>
      <div>
        <div className={styles["search-result-name__grid3"]}>
          <h5>{props.name}</h5>
          <div className={styles["search-result-rate__text"]}>
            {props.rateText}
          </div>
          <div className={styles["search-result-rate"]}>{props.rate}</div>
        </div>
        <div className={styles["search-result-distance"]}>
          {props.distance} from center
        </div>
        <div className={styles["search-result-tag"]}>{props.tag}</div>
        <div className={styles["search-result-items__grid2"]}>
          <div>
            <div className={styles["search-result-description"]}>
              {props.description}
            </div>
            <div>{props.type}</div>
            {/* Hiển thị content tùy loại hotel (có cancel hay ko) */}

            {content}
          </div>
          <div className={styles["search-result-price__flex"]}>
            <h3>${props.price}</h3>
            <div className={styles["include-tax"]}>
              Includes taxes and frees
            </div>
            <button className={styles["btn-search__result"]}>
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchListItem;
