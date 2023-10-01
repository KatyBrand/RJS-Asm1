import React from "react";
import styles from "./Detail.module.css";
import NavBar from "../home/components/navbar/NavBar";
import Button from "./components/Button";
import Description from "./components/Description";
import Contact from "../home/components/contact/Contact";
import Footer from "../home/components/footer/Footer";

//Tương tự Homepage
const Detail = () => {
  const dummyData = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 945,
  };

  return (
    <div>
      <NavBar />
      <div className={styles["detail-container"]}>
        <div className={styles[["detail-header-grid-2"]]}>
          <div>
            <h4>{dummyData.name}</h4>
            <p className={styles["address-container"]}>
              <i className="fa fa-map-marker"></i>
              {dummyData.address}
            </p>
            <div className={styles["detail-hotel-description"]}>
              <div className={styles["detail-hotel-distance"]}>
                {dummyData.distance}
              </div>
              <div className={styles["detail-hotel-price"]}>
                {dummyData.price}
              </div>
            </div>
          </div>
          <div className={styles["btn-container"]}>
            <Button />
          </div>
        </div>
        <div className={styles["detail-album-grid3"]}>
          {dummyData.photos.map((e) => {
            return (
              <div>
                <img src={e} />
              </div>
            );
          })}
        </div>
        {/* Phần mô tả cuối Detail page */}
        <Description
          title={dummyData.title}
          description={dummyData.description}
          price={dummyData.nine_night_price}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Detail;
