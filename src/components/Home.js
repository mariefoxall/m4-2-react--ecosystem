import React from "react";
import ListingGrid from "./ListingGrid";

const Home = (props) => {
  const itemsArray = Object.values(props.items);
  console.log(itemsArray);
  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid itemsArray={itemsArray} />
    </div>
  );
};

export default Home;
