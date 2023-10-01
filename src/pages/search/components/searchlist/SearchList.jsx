import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = () => {
  const dummyData = [
    {
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image_url: "./images/hotel_search_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_3.jpg",
    },
  ];
  // Pass props
  return (
    <div>
      {dummyData.map((e) => {
        return (
          <SearchListItem
            key={Math.random() * 100}
            name={e.name}
            distance={e.distance}
            tag={e.tag}
            type={e.type}
            description={e.description}
            freeCancel={e.free_cancel}
            price={e.price}
            rate={e.rate}
            rateText={e.rate_text}
            imageUrl={e.image_url}
          />
        );
      })}
    </div>
  );
};
export default SearchList;
