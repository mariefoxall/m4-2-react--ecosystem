import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = (props) => {
  return (
    <ItemList>
      {props.itemsArray.map((item) => {
        return (
          <Link to={`/items/${item.id}`}>
            <ItemDescription>
              <img src={item.imageSrc} alt={`a ${item.name}`} />
              <h3>{item.name}</h3>
              <p>{item.latinName}</p>
            </ItemDescription>
          </Link>
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

  a {
    text-decoration: none;
    color: black;
  }
`;

const ItemDescription = styled.div`
  margin: 30px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 5px 5px 10px rgb(280, 180, 204, 0.3),
    -5px -5px 5px rgb(153, 255, 204, 0.3);

  img {
    height: 200px;
    width: 200px;
    border-radius: 15px;
  }
`;

export default ListingGrid;
