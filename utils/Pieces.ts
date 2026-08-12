export type PieceType = "king" | "queen" | "rook" | "knight" | "bishop" | "pawn";
export type Side = "black" | "white";
type RawPiece = { name: string; type: PieceType };
export type Piece = RawPiece & { side: Side, imageUrl: string };

const pieces: RawPiece[] = [
  { name: "King", type: "king" },
  { name: "Queen", type: "queen" },
  { name: "Rook1", type: "rook" },
  { name: "Rook2", type: "rook" },
  { name: "Knight1", type: "knight" },
  { name: "Knight2", type: "knight" },
  { name: "Bishop1", type: "bishop" },
  { name: "Bishop2", type: "bishop" },
  { name: "Pawn1", type: "pawn" },
  { name: "Pawn2", type: "pawn" },
  { name: "Pawn3", type: "pawn" },
  { name: "Pawn4", type: "pawn" },
  { name: "Pawn5", type: "pawn" },
  { name: "Pawn6", type: "pawn" },
  { name: "Pawn7", type: "pawn" },
  { name: "Pawn8", type: "pawn" },
];
export const blackPieces: Piece[] = pieces.map((piece) => (
  { ...piece, side: "black", imageUrl: `/pieces/${piece.type}/black` }
));
export const whitePieces: Piece[] = pieces.map((piece) => (
  { ...piece, side: "white", imageUrl: `/pieces/${piece.type}/white` }
));