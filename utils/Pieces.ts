export type PieceType = "king" | "queen" | "rook" | "knight" | "bishop" | "pawn";
type Side = "black" | "white";
type RawPiece = { name: string; type: PieceType };
export type Piece = RawPiece & { initialPlace: string; currentPlace: string; side: Side };

const initialBlackPlaces = [["d", "8"], ["e", "8"], ["a", "8"], "h8", "b8", "g8", "c8", "f8", "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"];
const initialWhitePlaces = ["d1", "e1", "a1", "h1", "b1", "g1", "c1", "f1", "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"];
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
export const blackPieces: Piece[] = pieces.map((piece, index) => (
  { ...piece, initialPlace: initialBlackPlaces[index], currentPlace: initialBlackPlaces[index], side: "black" }
));
export const whitePieces: Piece[] = pieces.map((piece, index) => (
  { ...piece, initialPlace: initialWhitePlaces[index], currentPlace: initialWhitePlaces[index], side: "white" }
));