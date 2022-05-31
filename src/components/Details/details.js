import React from "react";
import "./details.css";
import 
{
 Container,
  Col,
  Row,
} from "react-bootstrap";
import First from "./First";
import Second from "./second";
import Third from "./third";


function Details()
{
    return(
        <div id="details">
        <First/>
        <Second/>
        <Third/>
        </div>
    )
}

export default Details