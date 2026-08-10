import { Position } from "./Board";

export type PieceType = "king" | "queen" | "rook" | "knight" | "bishop" | "pawn";
type Side = "black" | "white";
type RawPiece = { name: string; type: PieceType };
export type Piece = RawPiece & { initialPlace: Position; currentPlace: Position; side: Side };

const initialBlackPlaces: Position[] = [
  { x: { name: "d", value: 4 }, y: { name: "8", value: 8 } },
  { x: { name: "e", value: 5 }, y: { name: "8", value: 8 } },
  { x: { name: "a", value: 1 }, y: { name: "8", value: 8 } },
  { x: { name: "h", value: 8 }, y: { name: "8", value: 8 } },
  { x: { name: "b", value: 2 }, y: { name: "8", value: 8 } },
  { x: { name: "g", value: 7 }, y: { name: "8", value: 8 } },
  { x: { name: "c", value: 3 }, y: { name: "8", value: 8 } },
  { x: { name: "f", value: 6 }, y: { name: "8", value: 8 } },
  { x: { name: "a", value: 1 }, y: { name: "7", value: 7 } },
  { x: { name: "b", value: 2 }, y: { name: "7", value: 7 } },
  { x: { name: "c", value: 3 }, y: { name: "7", value: 7 } },
  { x: { name: "d", value: 4 }, y: { name: "7", value: 7 } },
  { x: { name: "e", value: 5 }, y: { name: "7", value: 7 } },
  { x: { name: "f", value: 6 }, y: { name: "7", value: 7 } },
  { x: { name: "g", value: 7 }, y: { name: "7", value: 7 } },
  { x: { name: "h", value: 8 }, y: { name: "7", value: 7 } }
];
const initialWhitePlaces: Position[] = [
  { x: { name: "d", value: 4 }, y: { name: "1", value: 1 } },
  { x: { name: "e", value: 5 }, y: { name: "1", value: 1 } },
  { x: { name: "a", value: 1 }, y: { name: "1", value: 1 } },
  { x: { name: "h", value: 8 }, y: { name: "1", value: 1 } },
  { x: { name: "b", value: 2 }, y: { name: "1", value: 1 } },
  { x: { name: "g", value: 7 }, y: { name: "1", value: 1 } },
  { x: { name: "c", value: 3 }, y: { name: "1", value: 1 } },
  { x: { name: "f", value: 6 }, y: { name: "1", value: 1 } },
  { x: { name: "a", value: 1 }, y: { name: "2", value: 2 } },
  { x: { name: "b", value: 2 }, y: { name: "2", value: 2 } },
  { x: { name: "c", value: 3 }, y: { name: "2", value: 2 } },
  { x: { name: "d", value: 4 }, y: { name: "2", value: 2 } },
  { x: { name: "e", value: 5 }, y: { name: "2", value: 2 } },
  { x: { name: "f", value: 6 }, y: { name: "2", value: 2 } },
  { x: { name: "g", value: 7 }, y: { name: "2", value: 2 } },
  { x: { name: "h", value: 8 }, y: { name: "2", value: 2 } }
]

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