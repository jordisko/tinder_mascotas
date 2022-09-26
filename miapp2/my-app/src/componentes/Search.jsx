/* eslint-disable array-callback-return */
//Dependencia TinderCard Import ↧
import TinderCard from "react-tinder-card";
//Bootstrap Import ↧
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { People } from "./People";
const host = "http://localhost:3000/FotosCards/";

/*let personimage, nombre, fechaNacimiento, tipoUsuario, descripcion;

let id = 1;
async function fetchJSON() {
  const response = await fetch("http://localhost:3001/api/usuarios/" + id);
  const jsonResponse = await response.json();
  console.log(jsonResponse.data);
  return jsonResponse.data;
}

function cargarTarjeta() {
  // eslint-disable-next-line no-unused-vars

  fetchJSON().then((json) => {
    console.log(json.nombre);
    console.log(json.correoElectronico);
    personimage = json.fotoPerfil;
    nombre = json.nombre;
    fechaNacimiento = json.fechaNacimiento;
    tipoUsuario = json.tipoUsuario;
    descripcion = json.descripcion;
  });
}

cargarTarjeta();*/

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modalheader">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="nombreusuariochat">Chat con Match id 1 </h1>{" "}
          <h1 className="fotousuariochat"> </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="btnizq">
              Hola me interesa tu mascota
            </Form.Label>
            <br></br>
            <Form.Label className="btnderecha">
              Hola podrías hablarme más de ti?
            </Form.Label>
            <br></br>
            <Form.Label className="btnizq">
              Sí! Vivo en un piso bajo con terraza en las afueras de Barcelona
            </Form.Label>
            <br></br>
            <Form.Label className="btnderecha">
              Perfecto justo lo que buscaba!
            </Form.Label>
            <br></br>
            <Form.Label className="btnizq">
              Nos intercambiamos nuestros números de teléfono?
            </Form.Label>
            <Form.Control
              type="etext"
              placeholder="Escribe aquí tu mensaje"
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="chatchat">Enviar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Search() {
  const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: 10%;
  `;

  const ImgDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 19rem;
    width: 500px;
    height: 500px;
    background-size: cover;
    border-radius: 20px;
  `;

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  const [modalShow, setModalShow] = React.useState(false);

  //cargarTarjeta();
  return (
    <>
      <Container>
        <Row>
          <Col xl={8} sm={12}>
            <div className="tinderCards__cardContainer">
              <CardDiv>
                {People.map((person, index) => {
                  return (
                    <TinderCard
                      key={index}
                      className="swipe"
                      onSwipe={onSwipe}
                      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                      preventSwipe={["up", "down"]}
                    >
                      <ImgDiv
                        style={{
                          backgroundImage: `url(${host + person.fotoPerfil})`,
                        }}
                        bg={host + person.fotoPerfil}
                      >
                        <h1
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "30px",
                            left: "5px",
                            fontSize: "18px",
                            fontWeight: "bold",
                            padding: "10px",
                            textShadow: "4px 4px 8px black",
                          }}
                        >
                          {person.nombre}
                        </h1>

                        <p
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "0px",
                            left: "10px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            fontFamily:
                              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif ",
                            padding: "5px",
                            margin: "10px",
                            background: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "40%",
                            boxShadow: "1px 1px 8px black",
                          }}
                        >
                          {person.fechaNacimiento}
                        </p>

                        <p
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "0px",
                            left: "50px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            fontFamily:
                              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif ",
                            padding: "5px",
                            margin: "10px",
                            background: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "40%",
                            boxShadow: "1px 1px 8px black",
                          }}
                        >
                          {person.tipoUsuario}
                        </p>

                        <p
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "0px",
                            left: "120px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            fontFamily:
                              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif ",
                            padding: "5px",
                            margin: "10px",
                            background: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "40%",
                            boxShadow: "1px 1px 8px black",
                          }}
                        >
                          {person.descripcion}
                        </p>
                      </ImgDiv>
                    </TinderCard>
                  );
                })}
              </CardDiv>
            </div>
          </Col>
       

        <Col xl={4} sm={12} className="Menu">
          <Row className="botones">
            <button className="button-80" onClick={matchesshow}>
              Matches
            </button>
            <button className="button-80" onClick={messagesshow}>
              Mensajes
            </button>
          </Row>
          <Row>
            <div id="Matches">
              {People.map((person, index) => {
                return (
                  <ImgDiv
                    className="matchesmns"
                    style={{
                      backgroundImage: `url(${host + person.fotoPerfil})`,
                      width: "150px",
                      height: "150px",
                      padding: "0",
                      margin: "10px",
                    }}
                    bg={host + person.fotoPerfil}
                  >
                    <p className="Text_Card_match">{person.nombre}</p>
                  </ImgDiv>
                );
              })}
            </div>
            <Container className="mns" id="Messages">
              <Button
                className="btnmns"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                MATCH ID 1
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Button
                className="btnmns"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                MATCH ID 2
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Button
                className="btnmns"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                MATCH ID 3
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Button
                className="btnmns"
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                MATCH ID 4
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Container>
          </Row>
        </Col>
        </Row>
      </Container>
    </>
  );

  function matchesshow() {
    let matches = document.getElementById("Matches");
    matches.style.display = "block";
    let messages = document.getElementById("Messages");
    messages.style.display = "none";
  }

  function messagesshow() {
    let messages = document.getElementById("Messages");
    messages.style.display = "block";
    let matches = document.getElementById("Matches");
    matches.style.display = "none";
    return false;
  }
}

export default Search;
