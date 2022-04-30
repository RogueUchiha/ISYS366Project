import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ imgSrc, value }) => {
  // console.log(props);
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Subtitle>${value.price}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="product-actions">
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
