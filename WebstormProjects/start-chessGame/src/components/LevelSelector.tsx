import React from "react";

type Levels = {
    [key: string]: number;
};

type LevelSelectorProps = {
    levels: Levels;
    stockfishLevel: number;
    setStockfishLevel: (level: number) => void;
};

const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, stockfishLevel, setStockfishLevel }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", } }>
            {Object.entries(levels).map(([level, depth]) => (
                <button
                    key={level}
                    style={{
                        backgroundColor: depth === stockfishLevel ? "#779952" : "#edeed1", margin: '5px', color: 'black',
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",                  
                    }}
                    onClick={() => setStockfishLevel(depth)}
                >
                    {level}
                </button>
            ))}
        </div>
    );
};

export default LevelSelector;
