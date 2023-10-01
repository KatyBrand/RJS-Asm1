import React from "react";
import CityList from "./homepagelist/city-list/CityList";
import HotelSystemList from "./homepagelist/hotel-system-list/HotelSystemList";
import HotelList from "./homepagelist/hotel-list/HotelList";

const HomePageLists = () => {
  return (
    <div>
      <CityList />
      <HotelSystemList />
      <HotelList />
    </div>
  );
};
export default HomePageLists;
