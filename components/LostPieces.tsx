import { Piece } from "@/utils/Pieces";
import { useMemo } from "react";

export default function LostPiecesComponent({ lostPieces }: { lostPieces: Piece[] }) {
  const blackLostPieces = useMemo(() => {
    return lostPieces.filter(piece => piece.side === "black");
  }, [lostPieces]);
  const whiteLostPieces = useMemo(() => {
    return lostPieces.filter(piece => piece.side === "white");
  }, [lostPieces]);

  return (
    <div>
      <div>
        <p>Black - Lost Pieces: </p>
        <div>
          {blackLostPieces.map((piece: Piece, index: number) => (
            <p key={index}>{piece.name}</p>
          ))}
        </div>
      </div>

      <div>
        <p>White - Lost Pieces: </p>
        <div>
          {whiteLostPieces.map((piece: Piece, index: number) => (
            <p key={index}>{piece.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}