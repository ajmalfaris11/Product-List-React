import React, { useState } from "react";
import "./Products.css";
import {phonesData} from "./Product.data";
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
        
      </main>
    </>
  );
}

export default Products;
