import React, {useEffect, useState} from 'react';

const colors = [
    {
        name: "Blue",
        value: "#1A237E"
    },
    {
        name: "Orange",
        value: "#BF360C"
    },
    {
        name: "Yellow",
        value: "#EA9500"
    },
    {
        name: "Green",
        value: "#00796B"
    },
    {
        name: "Cyan",
        value: "#1565C0"
    },
    {
        name: "Red",
        value: "#B71C1C"
    },
    {
        name: "Purple",
        value: "#512DA8"
    },
    {
        name: "Black",
        value: "#000000"
    },
]

export default function ColorPicker() {
    const [selectedColor, setColor] = useState('#00796B');

    useEffect(() => {
        document.documentElement.style
            .setProperty('--primary-color', '#00796B');
    }, [colors])

    const handleChange = (newColor) => {
        setColor(newColor);
        document.documentElement.style
            .setProperty('--primary-color', newColor);
    }

    return (
        <div className="flex-wrap">
            {
                colors.map((item, index) =>
                    <div key={index} onClick={() => handleChange(item.value)}>
                        {item.color === selectedColor}
                        <div className={`color ${selectedColor === item.value ? "bordered" : ""}`} style={{
                            backgroundColor: item.value
                        }}></div>
                        <p>{item.name}</p>
                    </div>
                )
            }
        </div>
    );
}