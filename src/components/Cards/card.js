import React from "react";
import './card.css';
import 
{
  Card,
  Container
} from "react-bootstrap";
import image from "../../Photos/2548730.jpg"
function MyCard  ()  {
    return (
        <Card id="myCard" style={{ width: '27rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Your Business</Card.Title>
        </Card.Body>
          <Container id="days"><Container>HVAC contractor<br></br>Home Heating<br></br>Air Conditioning Service<br></br>Air Conditioning Repair Service</Container></Container>
      
        <Container id="days"> <Container>New States</Container><Container>California,USA</Container><Container>Add Service Area</Container> </Container>
         <Container id="days">
         <Container>Monday----------9:00AM-5:00PM</Container>
         <Container>Tuesday----------9:00AM-5:00PM</Container>
         <Container>Wednesday------9:00AM-5:00PM</Container>
         <Container>Thursday---------9:00AM-5:00PM</Container>
         <Container>Friday------------9:00AM-5:00PM</Container>
         <Container>Saturday---------9:00AM-5:00PM</Container>
         <Container>Sunday-----------CLOSED</Container>
         </Container>
      </Card>
    );
}

export default MyCard;