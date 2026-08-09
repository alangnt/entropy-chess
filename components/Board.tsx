"use client"

import { blackPieces, whitePieces, Piece } from "@/utils/Pieces";
import { initialBoard } from "@/utils/Board";
import { useState } from "react";

export default function BoardComponent() {
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>();

  const boardPieces: Piece[] = [...blackPieces, ...whitePieces];

  const selectPiece = (piece: Piece | null) => {
    if (!piece) return;
    if (piece.side === "black") return;

    if (selectedPiece === piece) return setSelectedPiece(null);

    setSelectedPiece(piece);
  }

  return (
    <div>
      {initialBoard.map((row, rowIndex) => (
        <div className={"flex"} key={rowIndex}>
          {row[1].map((column, columnIndex) => {
            const isWhiteBox = (columnIndex % 2 === 0 && rowIndex % 2 === 0) || (columnIndex % 2 !== 0 && rowIndex % 2 !== 0);
            const pieceIndex = column + row[0];
            const piece = boardPieces.find(piece => piece.initialPlace === pieceIndex) ?? null;
            const isSelected = piece && selectedPiece === piece;
            return (
              <p key={columnIndex + rowIndex} onClick={() => selectPiece(piece)} className={`
                w-24 h-24 flex items-center justify-center border
                ${isWhiteBox ? '' : 'bg-foreground text-background border-foreground'}
                ${isSelected ? 'border-red-500 shadow shadow-red-500' : ''}
              `}>{piece?.name}</p>
            )
          })}
        </div>
      ))}
    </div>
  )
}