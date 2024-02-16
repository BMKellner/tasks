import React from "react";
import "./App.css";
import picture from "/Users/ben/tasks/src/Images/the_blimp.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Benjamin Kellner is the greatest Hello World CISC275
            </header>
            <header className="App-header">
                Ceeve is the biggest blimp in the entire world
            </header>
            <img
                src={picture}
                alt="The Blimp cerca 2019"
                width="200"
                height="300"
            />
            Reasons why Ceeve is the biggest blimp in the world:
            <ul>
                <li>He looks like a blimp</li>
                <li>He sounds like a blimp</li>
                <li>He acts like a blimp</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Click If Blimp
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column.
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#eb343d"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column.
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "#eb343d"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
        </div>
    );
}

export default App;
