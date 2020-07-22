import React from "react";
import styled from "styled-components";

const ListingGrid = (props) => {
  return (
    <ItemList>
      {props.itemsArray.map((item) => {
        return (
          <ItemDetails>
            <img src={item.imageSrc} alt={`a ${item.name}`} />
            <h3>{item.name}</h3>
            <p>{item.latinName}</p>
          </ItemDetails>
        );
      })}
    </ItemList>
  );
};

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 50px;
  justify-content: space-between;
`;

const ItemDetails = styled.div`
  margin: 30px;

  img {
    height: 200px;
    width: 200px;
  }
`;

export default ListingGrid;
