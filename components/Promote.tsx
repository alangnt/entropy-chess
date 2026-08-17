import { Piece, Side } from "@/utils/Pieces";

type PromoteProps = {
  side: Side;
  setIsPromoting: (value: boolean) => void;
}

export default function PromoteComponent({ side, setIsPromoting }: PromoteProps) {
  const pieces: Piece[] = [
    { type: "queen", side: side, imageUrl: `/pieces/queen/${side}.svg`, hasEverMoved: true },
    { type: "rook", side: side, imageUrl: `/pieces/rook/${side}.svg`, hasEverMoved: true },
    { type: "bishop", side: side, imageUrl: `/pieces/bishop/${side}.svg`, hasEverMoved: true },
    { type: "knight", side: side, imageUrl: `/pieces/knight/${side}.svg`, hasEverMoved: true }
  ];

  return (
    <div>

    </div>
  )
}