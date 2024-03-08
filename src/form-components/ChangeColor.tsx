import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("Red");

    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Orange",
        "Black",
        "White"
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color} style={{ margin: "0 10px" }}>
                    <input
                        type="radio"
                        value={color}
                        name="color"
                        checked={selectedColor === color}
                        onChange={handleChange}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
