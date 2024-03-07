import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ onDouble }: { onDouble: () => void }): JSX.Element {
    return <Button onClick={onDouble}>Double</Button>;
}

function Halver({ onHalve }: { onHalve: () => void }): JSX.Element {
    return <Button onClick={onHalve}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    // Initialize the value to 10 as expected by the tests
    const [value, setValue] = useState<number>(10);

    const handleDouble = () => setValue((currentValue) => 2 * currentValue);
    const handleHalve = () => setValue((currentValue) => 0.5 * currentValue);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler onDouble={handleDouble} />
            <Halver onHalve={handleHalve} />
        </div>
    );
}
