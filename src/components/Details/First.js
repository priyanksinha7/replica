import React from "react";
import "./first.css";
import image from "../../Photos/google.png";
import image2 from "../../Photos/maps.png";
import image3 from "../../Photos/share.jpg";
import 
{
 Container,
  Col,
  Row,
} from "react-bootstrap";

function First()
{
    return(
        <Container>
            <Row id="myRow">
               <h4> Your Business is live on Google </h4>
            
            <Row id="myRow2">
                <Col sm={2} id="col11">
                    <img id="myImg2" src={image} alt="pic"></img>
                </Col>
                <Col sm={10} id="col11">
                  <h5>  View on Search </h5>
                </Col>
            </Row>
            <Row id="myRow2">
                <Col sm={2} id="col11">
                    <img id="myImg2" src={image2} alt="pic"></img>
                </Col>
                <Col sm={10} id="col11">
                  <h5>  View on maps </h5>
                </Col>
            </Row>
            <Row id="myRow3">
                <Col sm={2} id="col11">
                    <img id="myImg2" src={image3} alt="pic"></img>
                </Col>
                <Col sm={10} id="col11">
                  <h5>  Share your Business Profile </h5>
                </Col>
            </Row>
            </Row>
        </Container>
    )
}
export default First;