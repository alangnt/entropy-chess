import { Piece, Side } from "@/utils/Pieces";

type PromoteProps = {
  side: Side;
  setIsPromoting: (value: boolean) => void;
}

export default function PromoteComponent({ side, setIsPromoting }: PromoteProps) {
  const pieces: Piece[] = [
    { name: "Queen", type: "queen", side: side, imageUrl: `/pieces/queen/${side}.svg`, hasEverMoved: true },
    { name: "Rook1", type: "rook", side: side, imageUrl: `/pieces/rook/${side}.svg`, hasEverMoved: true },
    { name: "Bishop1", type: "bishop", side: side, imageUrl: `/pieces/bishop/${side}.svg`, hasEverMoved: true },
    { name: "Knight1", type: "knight", side: side, imageUrl: `/pieces/knight/${side}.svg`, hasEverMoved: true }
  ];

  return (
    <div>

    </div>
  )
}