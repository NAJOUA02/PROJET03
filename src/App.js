
import React from "react";
import { Card, Button } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";
import image01 from './image01.jpg'
import image02 from'./image02.jpg';

const firstName = "NAJWA";
function App() {
  return (
    <div className="App">
      <center>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          <Image />
          <img src={image02} style={{width: '30rem'}} />
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      </center>
      <center>
      <p>BONJOUR, {firstName ? firstName : "there!"}</p>
      {firstName &&  <img src={image01} style={{width: '18rem'}} />}
      </center>
     
    </div>
  );
}

export default App;
