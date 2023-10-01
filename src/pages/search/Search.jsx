import React from "react";
import NavBar from "../home/components/navbar/NavBar";
import Footer from "../home/components/footer/Footer";
import SearchPopup from "./components/searchpopup/SearchPopup";
import SearchList from "./components/searchlist/SearchList";
import Contact from "../home/components/contact/Contact";
import styles from "./Search.module.css";

//Tương tự như phần Home
const Search = (props) => {
  return (
    <div>
      <NavBar />
      <div className={styles["search-grid__container"]}>
        <div className={styles["search-form-container"]}>
          {/* Pass props Date user nhập lấy từ Homepage */}
          <SearchPopup openDate={props.openDate} />
        </div>
        <div className={"search-result-container"}>
          {/* Search Results*/}
          <SearchList />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Search;
