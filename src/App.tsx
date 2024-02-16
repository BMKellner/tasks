import React from "react";
import "./App.css";
import picture from "/Users/ben/tasks/src/Images/the_blimp.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
