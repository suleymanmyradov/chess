type CustomSquareStyles = {
    [key: string]: {
        background: string;
        borderRadius?: string;
    };
};

export function generateCustomSquareStyles(selectedSquare: string | null, possibleMoves: string[]): CustomSquareStyles {
    const customSquareStyles: CustomSquareStyles = {};
    possibleMoves.forEach((square) => {
        customSquareStyles[square] = {
            background: "radial-gradient(circle, #ffff00 36%, transparent 40%)",
            borderRadius: "50%",
        };
    });
    if (selectedSquare) {
        customSquareStyles[selectedSquare] = {
            background: "rgba(255, 255, 0, 0.4)",
        };
    }
    return customSquareStyles;
}
