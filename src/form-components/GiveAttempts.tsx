import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const attemptsToGain = parseInt(requestedAttempts, 10);
        if (!isNaN(attemptsToGain) && attemptsToGain > 0) {
            setAttemptsLeft(attemptsLeft + attemptsToGain);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestedAttempts(event.target.value);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleChange}
                placeholder="Enter attempts to gain"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft <= 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
