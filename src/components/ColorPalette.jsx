import * as React from 'react';
import {Done} from "@mui/icons-material";
export const colors = [
    {
        name: "Blue",
        value: "1A237E",
        border: "rgba(26,35,126, 0.4)"
    },
    {
        name: "Orange",
        value: "BF360C",
        border: "rgba(191,54,12, 0.4)"
    },
    {
        name: "Yellow",
        value: "EA9500",
        border: "rgba(234,149,0, 0.4)"
    },
    {
        name: "Green",
        value: "00796B",
        border: "rgba(0,121,107, 0.4)"
    },
    {
        name: "Cyan",
        value: "1565C0",
        border: "rgba(21,101,192, 0.4)"
    },
    {
        name: "Red",
        value: "B71C1C",
        border: "rgba(183,28,28, 0.4)"
    },
    {
        name: "Purple",
        value: "512DA8",
        border: "rgba(81,45,168, 0.4)"
    },
    {
        name: "Black",
        value: "000000",
        border: "rgba(0,0,0, 0.4)"
    },
    {
        name: "Lime",
        value: "07a400",
        border: "rgba(47,227,0,0.4)"
    },
    {
        name: "Gold",
        value: "b4bb00",
        border: "rgba(204,211,0,0.4)"
    },
]
export default function ColorPalette(props) {

    return (
        <div className="color-palette">
            {
                colors.map((color, index) => (
                    <div
                        className="color-item"
                        key={index}
                        style={{
                            backgroundColor: `#${color.value}`,
                            boxShadow: props.color === color.value ? (`0px 0px 0px 5px ${color.border}`) : 'none'
                        }}
                        onClick={() => props.select(color)}>
                        { props.color === color.value && <Done sx={{color: "white"}} /> }
                    </div>
                ))
            }
        </div>
    );
}