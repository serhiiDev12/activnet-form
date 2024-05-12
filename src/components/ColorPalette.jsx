import * as React from 'react';
const colors = [
    {
        name: "Blue",
        value: "1A237E"
    },
    {
        name: "Orange",
        value: "BF360C"
    },
    {
        name: "Yellow",
        value: "EA9500"
    },
    {
        name: "Green",
        value: "00796B"
    },
    {
        name: "Cyan",
        value: "1565C0"
    },
    {
        name: "Red",
        value: "B71C1C"
    },
    {
        name: "Purple",
        value: "512DA8"
    },
    {
        name: "Black",
        value: "000000"
    },
]
export default function ColorPalette(props) {

    return (
        <div className="color-palette">
            {
                colors.map((color, index) => (
                    <div
                        className={"color-item " + (props.color === color.value ? "bordered" : "")}
                        key={index}
                        style={{backgroundColor: `#${color.value}`}}
                        onClick={() => props.select(color.value)}>
                    </div>
                ))
            }
        </div>
    );
}