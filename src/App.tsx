import React from "react";
import "./App.css";
import logo from "./the_blimp.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Benjamin Kellner is the greatest Hello World of all time CISC275
            </header>
            <header className="App-header">This is a Schmeven page</header>
            <img src={logo} alt="The Blimp Cerca 2019" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
