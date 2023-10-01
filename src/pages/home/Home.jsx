//Import Component
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import HomePageLists from "./components/HomePageLists";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

//Render component
const Home = (props) => {
  return (
    <div>
      <NavBar />
      {/* Pass function để lift state up, lấy dữ liệu
      về ngày người dùng chọn trong Form Input */}
      <Header onSaveDateHandler={props.onAddDate} />
      <HomePageLists />
      <Contact />
      <Footer />
    </div>
  );
};
//Export component
export default Home;
