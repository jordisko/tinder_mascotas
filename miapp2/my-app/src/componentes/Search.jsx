//Dependencia TinderCard Import ↧
import TinderCard from "react-tinder-card";

//Bootstrap Import ↧
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { People } from "./People";
import React from "react";
import Container from "react-bootstrap/Container";

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

  return (
    <>
      <Container>
        <div class="row">
          <div class="col-xl-8 col-sm-12">
            <div className="tinderCards__cardContainer">
              <CardDiv>
                {People.map((person, index) => {
                  if (person.match == "no") {
                    return (
                      <TinderCard
                        key={index}
                        className="swipe"
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                        preventSwipe={["up", "down"]}
                      >
                        <ImgDiv
                          style={{ backgroundImage: `url(${person.image})` }}
                          bg={person.image}
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
                            {person.name}
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
                            {person.age}
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
                            {person.race}
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
                            {person.type}
                          </p>
                        </ImgDiv>
                      </TinderCard>
                    );
                  }
                })}
              </CardDiv>
            </div>
          </div>
          <div class="col-xl-4 col-sm-12 Menu">
            <row className="botones">
              <button class="button-80" role="button" onClick={matchesshow}>
                Matches
              </button>
              <button class="button-80" role="button" onClick={messagesshow}>
                Mensajes
              </button>
            </row>
            <row>
              <div id="Matches">
                {People.map((person) => {
                  if (person.match == "yes") {
                    return (
                      <ImgDiv className="matchesmns"
                        style={{
                          backgroundImage: `url(${person.image})`,
                          width: "150px",
                          height: "150px",
                          padding: "0",
                          margin: "10px",
                        }}
                        bg={person.image}
                      >
                        <p className="Text_Card_match">{person.name}</p>
                      </ImgDiv>
                    );
                  }
                })}
              </div>
              <button className="mns" id="Messages">
                <ul>
                  <li>
                    <button>Sugar</button>
                  </li>
                </ul>
              </button>
            </row>
          </div>
        </div>
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
