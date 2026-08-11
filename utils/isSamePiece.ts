import { Piece } from "./Pieces";

export const isSamePiece = (p1: Piece, p2: Piece) => {
  return p1.name === p2.name && p1.type === p2.type && p1.side === p2.side;
}