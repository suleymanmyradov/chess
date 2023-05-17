import React, { useState, useRef, useEffect } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { SquareToXY, XYtoSquare, useChessContext } from '../../providers/ChessProvider';
import { Error } from '../../util/Error';
import { ChessPiece } from './ChessPiece';
import { Color, PieceSymbol, Square } from 'chess.js';

interface MoveProps {
  grid_x: number,
  grid_y: number,
  will_take: boolean,
  is_castle: boolean,
}

const MoveContainerDiv = styled.div`
grid-column: ${(props: MoveProps) => props.grid_x + 1} / span 1;
grid-row: ${(props: MoveProps) => props.grid_y + 1} / span 1;
position: relative;
`;

const MoveInnerDiv = styled.div`
top: 25%;
left: 25%;
position: absolute;
width: 50%;
height: 50%;
border-radius: 50%;
background-color: ${(props: MoveProps) => props.will_take ? '#fc0339' : props.is_castle ? '#f5a742' : '#03a1fc'};
`;

const Move: React.FC<MoveProps> = (props) => {
  return (
    <MoveContainerDiv {...props}>
      <MoveInnerDiv  {...props} />
    </MoveContainerDiv>
  );
};

const BoardDiv = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  position: relative;
  grid-template-columns: ${() => 'auto '.repeat(8) + ';'};
  grid-template-rows: ${() => 'auto '.repeat(8) + ';'};
  user-select: none;
  -moz-user-select: none;
  touch-action: none;
`;

interface BoardGridProps {
  gridColor: boolean,
  grid_x: number,
  grid_y: number,
  theme: DefaultTheme,
}

const BoardGridDiv = styled.div`
  position: relative;
  background-color: ${(props: BoardGridProps) => props.gridColor ? props.theme.chess.board_light : props.theme.chess.board_dark};
  grid-column: ${(props: BoardGridProps) => props.grid_x + 1} / span 1;
  grid-row: ${(props: BoardGridProps) => props.grid_y + 1} / span 1;
`;

const BoardGridRowLabel = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: ${props => props.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`;
const BoardGridColLabel = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${props => props.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`;

interface GridPosition {
  grid_x: number,
  grid_y: number,
}

export const Chessboard: React.FC = () => {
  const { board, turn, PotentialMoves, MakeMove } = useChessContext();
  const [selected, setSelected] = useState<GridPosition | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  //const [_, setTime] = useState(ChessTimeSinceStarted(board));
  const [moveError, setMoveError] = useState('');

  const onTouchMove = (e: TouchEvent) => {
    if (!e.target || !boardRef.current) return;
    const div = e.target as HTMLDivElement;
    if (div === boardRef.current || boardRef.current.contains(div)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // setTime(ChessTimeSinceStarted(board));
    }, 1000);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      clearInterval(interval);
      document.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  const pixelsToGrid = (x: number, y: number): [number, number] => {
    const parent = boardRef.current;
    if (parent === null) {
      console.log('failed to get reference to game board div!');
      return [0, 0];
    }

    const grid_x = Math.floor((x - parent.offsetLeft) / (parent.offsetWidth / 8));
    const grid_y = Math.floor((y - parent.offsetTop) / (parent.offsetHeight / 8));
    return [grid_x, grid_y];
  };

  const gridToPixels = (x: number, y: number): [number, number] => {
    const parent = boardRef.current;
    if (parent === null) {
      console.log('failed to get reference to game board div!');
      return [0, 0];
    }

    const pixel_x = (x * (parent.offsetWidth / 8)) + parent.offsetLeft;
    const pixel_y = (y * (parent.offsetHeight / 8)) + parent.offsetTop;
    return [pixel_x, pixel_y];
  };

  const AttemptMove = (from_x: number, from_y: number, to_x: number, to_y: number): void => {
    // CHECK PROMOTION!!!
    if (!MakeMove(XYtoSquare(from_x, from_y), XYtoSquare(to_x, to_y))) {
      setMoveError(`unable to move piece from (${from_x},${from_y}) to (${to_x}, ${to_y})`);
      return;
    }
  };

  return (
    <BoardDiv ref={boardRef}>
      {
        [...Array(8 * 8)].map(
          (_, i) => {
            const x = i % 8;
            const y = Math.floor(i / 8);
            return (<BoardGridDiv
              key={i}
              grid_x={x}
              grid_y={y}
              gridColor={(i - y) % 2 == 0}
            >
              {x == 0 && <BoardGridRowLabel>{8 - y}</BoardGridRowLabel>}
              {y == 0 && <BoardGridColLabel>{'abcdefgh'[x]}</BoardGridColLabel>}
            </BoardGridDiv>);
          }
        )
      }
      {
        (board.map((row, y) => row.map((value, x) => { return { x, y, ...value } })).flat()
          .filter(v => v.team && v.type && v.uid) as { team: Color, type: PieceSymbol, uid: string, x: number, y: number }[])
          .sort((a, b) => a.uid.localeCompare(b.uid))
          .map(
            v =>
              <ChessPiece
                key={`piece_${v.uid}`}
                type={v.type}
                grid_x={v.x}
                grid_y={v.y}
                is_white={v.team == 'w'}
                on_place={(x, y) => AttemptMove(v.x, v.y, x, y)}
                pixels_to_grid={pixelsToGrid}
                grid_to_pixels={gridToPixels}
                on_select_change={(selected) => selected ? setSelected({ grid_x: v.x, grid_y: v.y }) : setSelected(null)}
                can_click={v.team === turn}
              />
          )
      }
      {
        selected &&
        PotentialMoves(selected.grid_x, selected.grid_y).map((move, i) =>
          <Move
            key={`move_${i}`}
            grid_x={SquareToXY(move.to)[0]}
            grid_y={SquareToXY(move.to)[1]}
            will_take={move.flags.indexOf('e') >= 0 || move.flags.indexOf('c') >= 0}
            is_castle={move.flags.indexOf('k') >= 0 || move.flags.indexOf('q') >= 0}
          />
        )
      }
      <Error error={moveError} duration={1000} onErrorClose={() => setMoveError('')} />
    </BoardDiv>
  );
};