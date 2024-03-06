import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const multipleChoice = "multiple_choice_question";
    const shortAnswer = "short_answer_question";

    const [questionType, setQuestionType] = useState(shortAnswer);
    const handleChangeType = () => {
        setQuestionType((currentType) =>
            currentType === shortAnswer ? multipleChoice : shortAnswer
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            <p>
                {questionType === multipleChoice
                    ? "Multiple Choice"
                    : "Short Answer"}
            </p>
        </div>
    );
}
