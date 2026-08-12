import { Piece } from "@/utils/Pieces";
import Image from "next/image";
import { useMemo } from "react";

export default function LostPiecesComponent({ lostPieces }: { lostPieces: Piece[] }) {
  const blackLostPieces = useMemo(() => {
    return lostPieces.filter(piece => piece.side === "black");
  }, [lostPieces]);
  const whiteLostPieces = useMemo(() => {
    return lostPieces.filter(piece => piece.side === "white");
  }, [lostPieces]);

  return (
    <div className="flex flex-col justify-between">
      <div>
        {whiteLostPieces.map((piece: Piece, index: number) => (
          <Image key={index} src={piece.imageUrl} alt={piece.name + piece.side} width={30} height={30}></Image>
        ))}
      </div>

      <div>
        {blackLostPieces.map((piece: Piece, index: number) => (
          <Image key={index} src={piece.imageUrl} alt={piece.name + piece.side} width={30} height={30}></Image>
        ))}
      </div>
    </div>
  )
}