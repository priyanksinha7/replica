import React from "react";
import './threeGrid.css';

import 
{
 Container,
  Col,
  Row,
} from "react-bootstrap";
import MyCard from "../Cards/card";
import Info from "../Blocks/info";
import Home from "../Blocks/Home"
import Posts from "../Blocks/Posts";
import Infos from "../Blocks/Infos";
import Insights from "../Blocks/Insights";
import Reviews from "../Blocks/Reviews";
import Messaging from "../Blocks/Messaging";
import Services from "../Blocks/Services";
import Photos from "../Blocks/Photos";
import Website from "../Blocks/website";
import User from "../Blocks/users";
import Details from "../Details/details";

function ThreeGrid  ()  {
    return (
<div id="myDiv">
  <Row>
  <Col  sm={3}>
      <Container>
      <Row id="myRow">
      <Col sm={9} id="myCol">
      <Row>
      <Info/>
      </Row>
      <Row id="scroll">
      <Home/>
      <Posts/>
      <Infos/>
       <Insights/>
       <Reviews/>
       <Messaging/>
       <Photos/>
       <Services/>
        <Website/>
        <User/>
        </Row>
      </Col>
      <Col sm={3}></Col>
      </Row>
      </Container>
  </Col>
  <Col sm={9}>
  <Row>
  <Col sm={5}>
  <MyCard/>
  </Col>
  <Col sm={7}>
  <Details/>
  </Col>
  </Row>
  </Col>
  </Row>
</div>
    );
}
export default ThreeGrid;