import React from "react";

type ControlButtonsProps = {
    onNewGame: () => void;
};

const ControlButtons: React.FC<ControlButtonsProps> = ({ onNewGame }) => {
    const buttonStyle = {
        backgroundColor: "#779952",
        color: "black",
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    };

    return (
        <div>
            <button style={buttonStyle} onClick={onNewGame}>
                Täzeden başlat
            </button>
        </div>
    );
};

export default ControlButtons;
