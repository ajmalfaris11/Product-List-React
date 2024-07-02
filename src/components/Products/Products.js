import React, { useState } from "react";
import "./Products.css";
import { phonesData } from "./Product.data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {

  // use state Hook
  const [items, setItems] = useState(phonesData);

  // functions for decrement buttons
  const decQtry = (id) => {
    const newItem = items.map((item)=>
    item.id === id && item.qty > 1 ? {...item, qty:item.qty-1} : item
  );
  setItems(newItem);
  } 

  // functions for increment buttons
  const incQty = (id) => {
    const newItem = items.map((item)=>
    item.id === id ?{...item, qty:item.qty+1}:item
  );
  setItems(newItem);
  }

  return (
    <>
      <div className="header shadow">
        <h1>PREMEUM PHONES</h1>
      </div>
      <main>
        <div className="mainContainer">
          {/* mapping the item from items */}
          {items.map((item) => (
            <Card
              style={{ width: "100%" }}
              className="p-3 mb-5 bg-white rounded border-0"
              key={item.id}
            >
              <Card.Img
                variant="top"
                className="my-4 w-75 align-self-center phone-img"
                // require is for show the image which is in the local space other ways it won't work
                src={require(`${item.image}`)}
              />
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="model-Container">
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
                    <Button variant="dark" className="m-2 px-3" onClick={ () => decQtry(item.id)}>
                      -
                    </Button>
                    {item.qty}
                    <Button variant="dark" className="m-2 px-3" onClick={ () => incQty(item.id)}>
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
