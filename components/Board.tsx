"use client"

import { Piece, PieceType, blackPieces, whitePieces } from "@/utils/Pieces";
import { initialBoard, Position } from "@/utils/Board";
import { toKey } from "@/utils/positionToKey";
import { useEffect, useState } from "react";

export default function BoardComponent() {
  // const [board, setBoard] = useState<Board>(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>();
  const [allowedMoves, setAllowedMoves] = useState<Position[]>([]);

  const boardPieces: Piece[] = [...blackPieces, ...whitePieces];

  const selectPiece = (piece: Piece | null): void => {
    if (!piece) return;
    if (piece.side === "black") return;

    if (selectedPiece === piece) return setSelectedPiece(null);

    setSelectedPiece(piece);
  }

  const calculateAllowedMoves = (piece: Piece): Position[] => {
    const type: PieceType = piece.type;
    const initialPlace: Position = piece.initialPlace;
    const currentPlace: Position = piece.currentPlace;

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
          x: { value: currentPlace.x.value }, 
          y: { value: currentPlace.y.value + 1 } 
        });
        if (toKey(initialPlace) === toKey(currentPlace)) {
          moves.push({ 
            x: { value: currentPlace.x.value }, 
            y: { value: currentPlace.y.value + 2 } 
          });
        }
      default:
        break;
    }

    return moves;
  }

  useEffect(() => {
    if (!selectedPiece) return setAllowedMoves([]);;
    const calculatedAllowedMoves = calculateAllowedMoves(selectedPiece);
    console.log("Authorized moves: ", calculatedAllowedMoves);
    setAllowedMoves(calculatedAllowedMoves);
  }, [selectedPiece]);

  return (
    <div className={"grid grid-cols-8 w-fit"}>
      {initialBoard.map((tile: Position, index: number) => {
        const rawTile = { x: { value: tile.x.value }, y: { value: tile.y.value } };
        const isBlackTile = (tile.x.value % 2 === 0 && tile.y.value % 2 === 0) || (tile.x.value % 2 !== 0 && tile.y.value % 2 !== 0);
        const piece = boardPieces.find(piece => piece.currentPlace.x.value === tile.x.value && piece.currentPlace.y.value === tile.y.value) ?? null;
        const isSelected = piece && selectedPiece === piece;

        const allowedKeys = new Set(allowedMoves.map(toKey));
        const isAllowedMove = allowedKeys.has(toKey(rawTile));

        return (
          <div
            key={index}
            onClick={() => selectPiece(piece)}
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