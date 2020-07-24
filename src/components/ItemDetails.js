import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items } from "../data";
import { sellers } from "../data";

const ItemDetails = () => {
  const { itemId } = useParams();
  const currentFruit = items[itemId];
  const isInStock = currentFruit.quantity > 0;
  return (
    <ItemDetailsDiv>
      <FruitImg src={currentFruit.imageSrc} alt={currentFruit.name} />
      <RightSide>
        <FruitName>
          <h1>{currentFruit.name}</h1>
          <h3>{currentFruit.latinName}</h3>
        </FruitName>
        <FruitInfo>
          <p>{currentFruit.description}</p>
          <ProductOf>
            Product of<strong>{currentFruit.countryOfOrigin}</strong>
          </ProductOf>
          <BuyButton>
            {isInStock
              ? `$${currentFruit.price} - Buy now`
              : ":(    Out of stock"}
          </BuyButton>
          <SellerDiv>
            <SellerAvatar
              src={sellers[currentFruit.sellerId].avatarSrc}
              alt={sellers[currentFruit.sellerId].avatarSrc}
            />
            <p>
              Sold by:
              <strong>{sellers[currentFruit.sellerId].storeName}</strong>
            </p>
          </SellerDiv>
        </FruitInfo>
      </RightSide>
    </ItemDetailsDiv>
  );
};

const RightSide = styled.div`
  padding: 0 30px;
`;

const ItemDetailsDiv = styled.div`
  display: flex;
`;

const FruitImg = styled.img`
  /* width: 400px;
  height: 400px; */
  width: 50%;
  /* margin-bottom: 50%; */
  border-radius: 20px;
`;

const FruitName = styled.div`
  h1 {
    font-weight: bold;
  }

  h3 {
    font-style: italic;
    color: grey;
  }
`;

const FruitInfo = styled.div`
  margin: 10px;

  p {
    margin: 30px 10px;
  }
`;

const ProductOf = styled.p`
  font-style: italic;
`;

const BuyButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  background-color: #5200cc;
  color: white;
  outline: none;
  border: none;
  font-size: 20px;
  width: 300px;
`;

const SellerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SellerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 0;
`;

export default ItemDetails;
