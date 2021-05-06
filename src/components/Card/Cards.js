import React from "react";

// Component
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  const image1 = [
    {
      key: 1,
      img:
        "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller.jpg",
      text: "Explore the hidden waterfall deep inside the Amazon Jungle",
      label: "Adeventure"
    },
    {
      key: 2,
      img:
        "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-13.jpg",
      text: "Travel through the Islands of Bali in a Private Cruise",
      label: "Adeventure"
    },
  ];

  const image2 = [
    {
      key: 1,
      img:
      "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-12.jpg",
      text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
      label: "Adeventure"
    },
    {
      key: 2,
      img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-21.jpg",
      text: "Experience Skiing on Top of the Himilayan Mountains",
      label: "Mistery",
    },
    {
      key: 3,
      img: "https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-16.jpg",
      text: "Ride through the Grand Canyon on a guided camel tour",
      label: "Adrenaline"
    }
  ]
  
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {image1.map((img) => {
              return (
                <CardItem
                  src={img.img}
                  text={img.text}
                  label="Adventure"
                  path="/services"
                />
              );
            })}
          </ul>
          <ul className="cards__items">\
          {image2.map(img => {
            return(
              <CardItem
                src={img.img}
                text={img.text}
                label={img.label}
                path="/services"
              />
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
