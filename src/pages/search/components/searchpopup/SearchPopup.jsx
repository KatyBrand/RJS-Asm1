import React from "react";
import FormOption from "../form-option/FormOption";
import styles from "./SearchPopup.module.css";
import SearchedDate from "./SearchedDate";

const SearchPopup = (props) => {
  return (
    <form>
      <h5>Search</h5>
      <div>Destination</div>
      <input className={styles["search-input__field"]} type="text"></input>
      <div>Check-in Date</div>
      {/* Pass props Date user nhập lấy từ Homepage */}
      <SearchedDate openDate={props.openDate} />
      <div>Options</div>
      {/* Phần này dài nên e để riêng 1 component */}
      <FormOption />
      <div>
        <button className={styles["btn-form__search"]}>Search</button>
      </div>
    </form>
  );
};
export default SearchPopup;
