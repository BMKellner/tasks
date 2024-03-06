import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isInProgress, setIsInProgress] = useState(false);

    function startQuiz() {
        if (attempts > 0) {
            setIsInProgress(true);
            setAttempts(attempts - 1);
        }
    }

    function stopQuiz() {
        setIsInProgress(false);
    }

    function addAttempt() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <button
                disabled={isInProgress || attempts === 0}
                onClick={startQuiz}
            >
                Start Quiz
            </button>
            <button disabled={!isInProgress} onClick={stopQuiz}>
                Stop Quiz
            </button>
            <button disabled={isInProgress} onClick={addAttempt}>
                Mulligan
            </button>
            <p>Attempts left: {attempts}</p>
            <p>
                {isInProgress
                    ? "Quiz is in progress..."
                    : "Quiz is not in progress"}
            </p>
        </div>
    );
}
