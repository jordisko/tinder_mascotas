import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Inicio() {
    return (
<div className="inicio">
<Row className="iniciorow">
  <Col xl={4} sm={12} >
  <p className="textop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    odit rem itaque impedit. Saepe, corporis. Assumenda labore impedit
    aut pariatur eos consequuntur ab eum, possimus reprehenderit
    voluptas, deleniti quis fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    odit rem itaque impedit. Saepe, corporis. Assumenda labore impedit
    aut pariatur eos consequuntur ab eum, possimus reprehenderit
    voluptas, deleniti quis fugit?</p>
  </Col>
  <Col xl={8} sm={12} className="imagen1"></Col>
</Row>
<Row className="iniciorow">
  <Col xl={6} sm={12} className="logo1"></Col>
  <Col xl={6} sm={12}>
  <p className="textop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    odit rem itaque impedit. Saepe, corporis. Assumenda labore impedit
    aut pariatur eos consequuntur ab eum, possimus reprehenderit
    voluptas, deleniti quis fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    odit rem itaque impedit. Saepe, corporis. Assumenda labore impedit
    aut pariatur eos consequuntur ab eum, possimus reprehenderit
    voluptas, deleniti quis fugit?</p>

  </Col>
</Row>
<Row className="iniciorow">
  <Col >
    <p className="textop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    odit rem itaque impedit. Saepe, corporis. Assumenda labore impedit
    aut pariatur eos consequuntur ab eum, possimus reprehenderit
    voluptas, deleniti quis fugit?</p>
    
  </Col>
</Row>
</div>
  );
}
