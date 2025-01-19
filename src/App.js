// import logo from './logo.svg';
// import './App.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Description from './Description';
// // import Name from './Name';
// // import Price from './Price';
// // import Name from './Name';
// // import Price from './Price';
// // import picters from './picters';
// function App() {

//   return (
//     <div className="App">
//           <Description/>
          
//           <div >

//           <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
  
          
//         </div>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";
import image01 from './image01.jpg'
import image02 from'./image02.jpg';

// Définir votre prénom ici
const firstName = "NAJWA"; // Remplacez par votre prénom

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
