import React, { useState } from "react";
import "./Products.css";
import { phonesData } from "./Product.data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  const [items, setItems] = useState(phonesData);
  return (
    <>
      <div className="header">
        <h1>PRODUCTS</h1>
      </div>
      <main>
        <div className="mainContainer">
          {items.map((item) => (
            <Card
              style={{ width: "100%" }}
              className="p-3 mb-5 bg-white rounded border-0"
            >
              <Card.Img
                variant="top"
                className="my-4 w-75 align-self-center"
                src={require(`${item.image}`)}
              />
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="price-Container">
                  <Card.Title className="mb-2">{item.model}</Card.Title>
                </div>

                <div className="disc-container">
                  <Card.Text>{item.desc}</Card.Text>
                </div>
                <h5 className="price">
                  Price: <span>${item.price}</span>
                </h5>
                <div className="d-flex align-items-center mb-3">
                  
                  <div>
                    <Button variant="dark" className="m-2 px-3">
                      -
                    </Button>
                      {item.qty}
                    <Button variant="dark" className="m-2 px-3">
                      +
                    </Button>
                  </div>
                </div>
                <Button variant="dark" className="w-100">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default Products;
