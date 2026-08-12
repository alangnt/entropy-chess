"use client"

import BoardComponent from "@/components/Board";
import LostPiecesComponent from "@/components/LostPieces";
import { Piece } from "@/utils/Pieces";
import { useState } from "react";

export default function App() {
  const [lostPieces, setLostPieces] = useState<Piece[]>([]);

  return (
    <div>
      <h1>Chess</h1>

      <div className="flex gap-2">
        <BoardComponent lostPieces={lostPieces} setLostPieces={setLostPieces}></BoardComponent>
        <LostPiecesComponent lostPieces={lostPieces}></LostPiecesComponent>
      </div>
    </div>
  )
}