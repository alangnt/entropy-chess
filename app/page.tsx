"use client"

import BoardComponent from "@/components/Board";
import LostPiecesComponent from "@/components/LostPieces";
import PromoteComponent from "@/components/Promote";
import { Piece, Side } from "@/utils/Pieces";
import { Tile } from "@/utils/Board";
import { useState } from "react";

export default function App() {
  const [turn, setTurn] = useState<Side>("white");
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);
  const [selectedNewTile, setSelectedNewTile] = useState<Tile | null>(null);
  const [lostPieces, setLostPieces] = useState<Piece[]>([]);
  const [isPromoting, setIsPromoting] = useState<boolean>(false);
  const [selectedPromotionPiece, setSelectedPromotionPiece] = useState<Piece | null>(null);

  return (
    <div className="relative">
      <h1 className="text-center text-2xl py-4">Entropy Chess</h1>

      <div className="grid grid-cols-4 gap-2 h-full px-8">
        <div className="col-span-3 xl:col-span-2 flex items-center justify-center">
          <BoardComponent
            turn={turn}
            setTurn={setTurn}
            selectedTile={selectedTile}
            setSelectedTile={setSelectedTile}
            selectedNewTile={selectedNewTile}
            setSelectedNewTile={setSelectedNewTile}
            lostPieces={lostPieces}
            setLostPieces={setLostPieces}
            isPromoting={isPromoting}
            setIsPromoting={setIsPromoting}
            selectedPromotionPiece={selectedPromotionPiece}
          ></BoardComponent>
        </div>

        <div className="col-span-1 xl:col-span-2">
          <LostPiecesComponent lostPieces={lostPieces}></LostPiecesComponent>
        </div>
      </div>

      <p className="text-center">{turn === "white" ? "Your turn" : "Opponent's turn"}</p>

      {isPromoting && (
        <PromoteComponent
          side={turn}
          selectedTile={selectedTile}
          setIsPromoting={setIsPromoting}
          setSelectedPromotionPiece={setSelectedPromotionPiece}
        ></PromoteComponent>
      )}
    </div>
  )
}