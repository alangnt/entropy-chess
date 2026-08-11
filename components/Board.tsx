"use client"

import { PieceType } from "@/utils/Pieces";
import { Board, initialBoard, Position, Tile } from "@/utils/Board";
import { toKey } from "@/utils/positionToKey";
import { isSamePiece } from "@/utils/isSamePiece";
import { useEffect, useState } from "react";

export default function BoardComponent() {
  const [board, setBoard] = useState<Board>(initialBoard);

  const [selectedTile, setSelectedTile] = useState<Tile | null>();
  const [allowedMoves, setAllowedMoves] = useState<Position[]>([]);

  const selectTile = (tile: Tile): void => {
    if (selectedTile === tile) return setSelectedTile(null);
    setSelectedTile(tile);
  }

  const movePiece = (newTile: Tile): void => {
    if (!selectedTile) return;

    const oldTile = selectedTile;

    const oldPosition = toKey(oldTile.position);
    const currentPosition = toKey(newTile.position);

    const updatedTile = {
      ...newTile,
      currentPiece: selectedTile.currentPiece
    };

    delete oldTile.currentPiece;

    const updatedBoard = board.map((tile: Tile) => toKey(tile.position) === currentPosition ? updatedTile : tile);
    const updatedBoardFinal = updatedBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

    setBoard(updatedBoardFinal);
    setSelectedTile(null);
  }

  const onTileClick = (tile: Tile): void => {
    const piece = tile.currentPiece ?? null;
    const position = tile.position;

    if (!selectedTile && !piece) return;
    if (!selectedTile && piece && piece.side === "black") return;

    const allowedKeys = new Set(allowedMoves.map(toKey));
    console.log("Is allowed move: ", allowedKeys.has(toKey(position)));

    if (selectedTile && allowedKeys.has(toKey(position))) return movePiece(tile);

    if (piece) return selectTile(tile);
  }

  const calculateAllowedMoves = (tile: Tile): Position[] => {
    const position = tile.position;
    const initialPiece = tile?.initialPiece ?? null;
    const currentPiece = tile!.currentPiece!;
    const type: PieceType = currentPiece.type;

    let moves: Position[] = [];

    switch (type) {
      case "king":
        break;
      case "queen":
        break;
      case "rook":
        break;
      case "knight":
        break;
      case "bishop":
        break;
      case "pawn":
        moves.push({ 
          x: { value: position.x.value }, 
          y: { value: position.y.value + 1 } 
        });
        if (initialPiece && isSamePiece(initialPiece, currentPiece)) {
          moves.push({ 
            x: { value: position.x.value }, 
            y: { value: position.y.value + 2 } 
          });
        }
      default:
        break;
    }

    return moves;
  }

  useEffect(() => {
    if (!selectedTile) return setAllowedMoves([]);;
    const calculatedAllowedMoves = calculateAllowedMoves(selectedTile);
    setAllowedMoves(calculatedAllowedMoves);
  }, [selectedTile]);

  return (
    <div className={"grid grid-cols-8 w-fit"}>
      {board.map((tile: Tile, index: number) => {
        const isBlackTile = (tile.position.x.value % 2 === 0 && tile.position.y.value % 2 === 0) || (tile.position.x.value % 2 !== 0 && tile.position.y.value % 2 !== 0);
        const piece = tile?.currentPiece ?? null;
        const isSelected = piece && selectedTile === tile;

        const allowedKeys = new Set(allowedMoves.map(toKey));
        const isAllowedMove = allowedKeys.has(toKey(tile.position));

        return (
          <div
            key={index}
            onClick={() => onTileClick(tile)}
            className={`
              flex items-center justify-center w-24 h-24 border border-foreground col-span-1 row-span-1
              ${isBlackTile && !isAllowedMove ? "bg-foreground text-background" : ""}
              ${isSelected ? 'border-red-500 shadow shadow-red-500' : ''}
              ${isAllowedMove ? "bg-red-500" : ""}
            `}
          >
            <p>{piece?.name}</p>
          </div>
        )
      })}
    </div>
  )
}