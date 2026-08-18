import { Piece, Side } from "@/utils/Pieces";
import { Tile } from "@/utils/Board";
import Image from "next/image";

type PromoteProps = {
  side: Side;
  selectedTile: Tile | null;
  setIsPromoting: (value: boolean) => void;
  setSelectedPromotionPiece: (value: Piece | null) => void;
}

export default function PromoteComponent({ side, selectedTile, setIsPromoting, setSelectedPromotionPiece }: PromoteProps) {
  const pieces: Piece[] = [
    { type: "queen", side: side, imageUrl: `/pieces/queen/${side}.svg`, hasEverMoved: true },
    { type: "rook", side: side, imageUrl: `/pieces/rook/${side}.svg`, hasEverMoved: true },
    { type: "bishop", side: side, imageUrl: `/pieces/bishop/${side}.svg`, hasEverMoved: true },
    { type: "knight", side: side, imageUrl: `/pieces/knight/${side}.svg`, hasEverMoved: true }
  ];

  const onTileClick = (piece: Piece) => {
    const position = selectedTile ? selectedTile.position : null;
    if (!position) return setSelectedPromotionPiece(null);

    setSelectedPromotionPiece(piece);
    setIsPromoting(false);
  }

  return (
    <div className="absolute w-screen h-screen top-O bottom-0 flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 border rounded-lg bg-background p-8">
        {pieces.map((piece: Piece) => (
          <div key={piece.type} className="hover:bg-gray-200 transition p-2" onClick={() => onTileClick(piece)}>
            <Image
              src={piece.imageUrl}
              alt={piece.type + piece.side}
              width={40}
              height={40}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  )
}