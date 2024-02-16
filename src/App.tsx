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
        </div>
    );
}

export default App;
