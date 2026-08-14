"use client"

import BoardComponent from "@/components/Board";
import LostPiecesComponent from "@/components/LostPieces";
import { Piece, Side } from "@/utils/Pieces";
import { useState } from "react";

export default function App() {
  const [turn, setTurn] = useState<Side>("white");
  const [lostPieces, setLostPieces] = useState<Piece[]>([]);

  return (
    <div>
      <h1 className="text-center text-2xl py-4">Entropy Chess</h1>

      <div className="grid grid-cols-2 gap-2 h-full px-8">
        <div className="col-span-1 flex items-center justify-center">
          <BoardComponent turn={turn} setTurn={setTurn} lostPieces={lostPieces} setLostPieces={setLostPieces}></BoardComponent>
        </div>

        <div className="col-span-1">
          <LostPiecesComponent lostPieces={lostPieces}></LostPiecesComponent>
        </div>
      </div>

      <p className="text-center">{turn === "white" ? "Your turn" : "Opponent's turn"}</p>
    </div>
  )
}