"use client"

import { Piece, PieceType, blackPieces, whitePieces } from "@/utils/Pieces";
import { Board, initialBoard } from "@/utils/Board";
import { useState } from "react";

export default function BoardComponent() {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>();

  const boardPieces: Piece[] = [...blackPieces, ...whitePieces];

  const selectPiece = (piece: Piece | null) => {
    if (!piece) return;
    if (piece.side === "black") return;

    if (selectedPiece === piece) return setSelectedPiece(null);

    setSelectedPiece(piece);
  }

  const calculateAuthorizedMoves = (type: PieceType, currentPlace: string) => {
    switch (type) {
      case "king":
        return [""]
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
        break;
      default:
        return null;
    }
  }

  return (
    <div className={"grid grid-cols-8 w-fit"}>
      {board.map((tile, index) => {
        const isBlackTile = (tile.x.value % 2 === 0 && tile.y.value % 2 === 0) || (tile.x.value % 2 !== 0 && tile.y.value % 2 !== 0);
        const tileName = tile.x.name + tile.y.value;
        return (
          <div
            key={index}
            className={`
              flex items-center justify-center w-24 h-24 border border-foreground col-span-1 row-span-1
              ${isBlackTile ? "bg-foreground text-background" : ""}
            `}
          >
            <p>{tileName}</p>
            {/*
            {row.x.map((column, columnIndex) => {
              const isWhiteBox = (columnIndex % 2 === 0 && rowIndex % 2 === 0) || (columnIndex % 2 !== 0 && rowIndex % 2 !== 0);
              const pieceIndex = column + row[0];
              const piece = boardPieces.find(piece => piece.currentPlace === pieceIndex) ?? null;
              const isSelected = piece && selectedPiece === piece;
              return (
                <p key={columnIndex + rowIndex} onClick={() => selectPiece(piece)} className={`
                  w-24 h-24 flex items-center justify-center border
                  ${isWhiteBox ? '' : 'bg-foreground text-background border-foreground'}
                  ${isSelected ? 'border-red-500 shadow shadow-red-500' : ''}
                `}>{piece?.name}</p>
              )
            })}
            */}
          </div>
        )
      })}
    </div>
  )
}