import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = {
    "New Year's Day": "🎉",
    "Valentine's Day": "❤️",
    "Independence Day": "🎆",
    Halloween: "🎃",
    Christmas: "🎄"
};

const orderYear = [
    "New Year's Day",
    "Valentine's Day",
    "Independence Day",
    "Halloween",
    "Christmas"
];

const orderAlpha = Object.keys(holidays).sort();

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(orderYear[0]);

    function cycleByYear() {
        const currentIndex = orderYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % orderYear.length;
        setCurrentHoliday(orderYear[nextIndex]);
    }

    function cycleByAlpha() {
        const currentIndex = orderAlpha.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % orderAlpha.length;
        setCurrentHoliday(orderAlpha[nextIndex]);
    }

    type Holidays = {
        [key: string]: string;
    };

    const holidays: Holidays = {
        "New Year's Day": "🎉",
        "Valentine's Day": "❤️",
        "Independence Day": "🎆",
        Halloween: "🎃",
        Christmas: "🎄"
    };

    return (
        <div>
            <p>Holiday: {holidays[currentHoliday]}</p>
            <Button variant="primary" onClick={cycleByAlpha}>
                Advance by Alphabet
            </Button>{" "}
            <Button variant="secondary" onClick={cycleByYear}>
                Advance by Year
            </Button>
        </div>
    );
}
