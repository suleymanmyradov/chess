import { useMemo, useState, useCallback, useEffect } from "react";
import Engine from "../helper/engine";
import { Chess, Square, Move } from "chess.js";
import { Chessboard } from "react-chessboard";
import LevelSelector from "../components/LevelSelector";
import ControlButtons from "../components/Buttons";
import { generateCustomSquareStyles } from "../helper/CustomStyles";
import WebApp from '@twa-dev/sdk'


export default function ChessComputer() {
    const engine = useMemo(() => new Engine(), []);
    const game = useMemo(() => new Chess(), []);
    const [gamePosition, setGamePosition] = useState(game.fen());
    const [stockfishLevel, setStockfishLevel] = useState<number>(2);
    const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
    const [possibleMoves, setPossibleMoves] = useState<string[]>([]);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);

    WebApp.expand();

    useEffect(() => {
        if (!isPlayerTurn) {
            console.log("Triggering computer move");
            findBestMove();
        }
    }, [isPlayerTurn]);

    function onSquareClick(square: Square) {
        if (!isPlayerTurn) {
            console.log("Not player's turn, ignoring click");
            return;
        }
    
        const piece = game.get(square);
    
        // If there's already a selected square
        if (selectedSquare !== null) {
            // If the same square is clicked, reset the selection
            if (square === selectedSquare) {
                setSelectedSquare(null);
                setPossibleMoves([]);
                return;
            }
    
            // If a different square with a player's piece is clicked, switch selection to this new piece
            if (piece && piece.color === game.turn()) {
                const moves = game.moves({ square: square, verbose: true }) as Move[];
                setSelectedSquare(square);
                setPossibleMoves(moves.map((move) => move.to));
                return;
            }
    
            // Attempt to make a move if a different square is clicked
            const move = game.move({
                from: selectedSquare,
                to: square,
                promotion: "q",
            });
    
            if (move === null) {
                // Invalid move, reset the selection
                setSelectedSquare(null);
                setPossibleMoves([]);
            } else {
                // Move was successful
                setGamePosition(game.fen());
                setSelectedSquare(null);
                setPossibleMoves([]);
                setIsPlayerTurn(false);
    
                console.log("Player move applied, new FEN:", game.fen());
                console.log("Current turn:", game.turn());
                console.log("Is game over?", game.isGameOver());
    
                if (!game.isGameOver() && !game.isDraw()) {
                    findBestMove(); // Trigger AI move after player move
                }
            }
        } else {
            // If no piece is selected, select this piece if it belongs to the player
            if (piece && piece.color === game.turn()) {
                const moves = game.moves({ square: square, verbose: true }) as Move[];
                if (moves.length > 0) {
                    setSelectedSquare(square);
                    setPossibleMoves(moves.map((move) => move.to));
                }
            }
        }
    }
    

    const findBestMove = useCallback(() => {
        console.log("Finding best move for FEN:", game.fen());
        engine.evaluatePosition(game.fen(), stockfishLevel);
    
        engine.onMessage(({ bestMove }: { bestMove?: string }) => {
            if (bestMove) {
                    const from = bestMove.substring(0, 2) as Square;
                    const to = bestMove.substring(2, 4) as Square;
                    let move: { from: Square, to: Square, promotion?: string } = { from, to };
    
                    const piece = game.get(from);
                    if (piece && piece.type === "p" && (to[1] === "1" || to[1] === "8")) {
                        move.promotion = bestMove.substring(4, 5);
                    }
    
                    console.log("Received best move:", move);
    
                    const result = game.move(move); // Apply the move directly to the existing game object
    
                    if (result) {
                        setGamePosition(game.fen()); // Update the game position
                        setIsPlayerTurn(true); // Set player's turn back to true
                        console.log("Computer move applied, new FEN:", game.fen());
                    } else {
                        console.error("Invalid move (engine result was false):", move);
                    } 
            }
        });
    }, [game, stockfishLevel, engine, setGamePosition]);
    

    const customSquareStyles = generateCustomSquareStyles(selectedSquare, possibleMoves);

    const pieces = ["wP", "wN", "wB", "wR", "wQ", "wK", "bP", "bN", "bB", "bR", "bQ", "bK"] as const;
    const customPieces = useMemo(() => {
        const pieceComponents: { [key: string]: React.FC<{ squareWidth: number }> } = {};
        pieces.forEach(piece => {
            pieceComponents[piece] = ({ squareWidth }) => (
                <div
                    style={{
                        width: squareWidth,
                        height: squareWidth,
                        backgroundImage: `url(/${piece}.png)`,
                        backgroundSize: "100%",
                    }}
                />
            );
        });
        return pieceComponents;
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '100%',
                maxHeight: '90vh',
            }}>
                <LevelSelector levels={levels} stockfishLevel={stockfishLevel} setStockfishLevel={setStockfishLevel} />
                <Chessboard
                    id="StyledBoard"
                    position={gamePosition}
                    onSquareClick={onSquareClick}
                    customSquareStyles={customSquareStyles}
                    arePiecesDraggable={false}
                    customBoardStyle={{
                        borderRadius: "4px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    }}
                    customDarkSquareStyle={{
                        backgroundColor: "#779952",
                    }}
                    customLightSquareStyle={{
                        backgroundColor: "#edeed1",
                    }}
                    customPieces={customPieces}
                />
                <ControlButtons
                    onNewGame={() => {
                        game.reset();
                        setSelectedSquare(null);
                        setPossibleMoves([]);
                        setGamePosition(game.fen());
                        setIsPlayerTurn(true);
                    }}
                />
                <button
                    style={{
                        backgroundColor: "#779952",
                        color: "black",
                        padding: "10px 20px",
                        margin: "10px",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        const undoTimes = 2;
                        for (let i = 0; i < undoTimes; i++) {
                            game.undo();
                        }
                        setGamePosition(game.fen());
                        setIsPlayerTurn(true);
                    }}
                >
                    Yzyna
                </button>
            </div>
        </div>
    );
}

const levels = {
    "Okuwçy 🤓": 1,
    "Talyp 🧐": 4,
    "Proffesor 😵": 8,
};
