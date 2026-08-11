import { Piece } from "./Pieces";

type PositionX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
type PositionY = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type Position = {
  x: { name?: PositionX; value: number };
  y: { name?: PositionY; value: number };
};
export type Tile = { position: Position; initialPiece?: Piece; currentPiece?: Piece };
export type Board = Tile[];

export const initialBoard: Board = [
  { position: { x: { name: "a", value: 1 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Rook1", type: "rook", side: "black" }, currentPiece: { name: "Rook1", type: "rook", side: "black" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Knight1", type: "knight", side: "black" }, currentPiece: { name: "Knight1", type: "knight", side: "black" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Bishop1", type: "bishop", side: "black" }, currentPiece: { name: "Bishop1", type: "bishop", side: "black" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "8", value: 8 } }, initialPiece: { name: "King", type: "king", side: "black" }, currentPiece: { name: "King", type: "king", side: "black" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Queen", type: "queen", side: "black" }, currentPiece: { name: "Queen", type: "queen", side: "black" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Bishop2", type: "bishop", side: "black" }, currentPiece: { name: "Bishop2", type: "bishop", side: "black" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Knight2", type: "knight", side: "black" }, currentPiece: { name: "Knight2", type: "knight", side: "black" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Rook2", type: "rook", side: "black" }, currentPiece: { name: "Rook2", type: "rook", side: "black" } },

  { position: { x: { name: "a", value: 1 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn1", type: "pawn", side: "black" }, currentPiece: { name: "Pawn1", type: "pawn", side: "black" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn2", type: "pawn", side: "black" }, currentPiece: { name: "Pawn2", type: "pawn", side: "black" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn3", type: "pawn", side: "black" }, currentPiece: { name: "Pawn3", type: "pawn", side: "black" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn4", type: "pawn", side: "black" }, currentPiece: { name: "Pawn4", type: "pawn", side: "black" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn5", type: "pawn", side: "black" }, currentPiece: { name: "Pawn5", type: "pawn", side: "black" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn6", type: "pawn", side: "black" }, currentPiece: { name: "Pawn6", type: "pawn", side: "black" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn7", type: "pawn", side: "black" }, currentPiece: { name: "Pawn7", type: "pawn", side: "black" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn8", type: "pawn", side: "black" }, currentPiece: { name: "Pawn8", type: "pawn", side: "black" } },

  { position: { x: { name: "a", value: 1 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "b", value: 2 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "c", value: 3 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "d", value: 4 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "e", value: 5 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "f", value: 6 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "g", value: 7 }, y: { name: "6", value: 6 } } },
  { position: { x: { name: "h", value: 8 }, y: { name: "6", value: 6 } } },

  { position: { x: { name: "a", value: 1 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "b", value: 2 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "c", value: 3 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "d", value: 4 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "e", value: 5 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "f", value: 6 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "g", value: 7 }, y: { name: "5", value: 5 } } },
  { position: { x: { name: "h", value: 8 }, y: { name: "5", value: 5 } } },

  { position: { x: { name: "a", value: 1 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "b", value: 2 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "c", value: 3 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "d", value: 4 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "e", value: 5 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "f", value: 6 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "g", value: 7 }, y: { name: "4", value: 4 } } },
  { position: { x: { name: "h", value: 8 }, y: { name: "4", value: 4 } } },

  { position: { x: { name: "a", value: 1 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "b", value: 2 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "c", value: 3 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "d", value: 4 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "e", value: 5 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "f", value: 6 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "g", value: 7 }, y: { name: "3", value: 3 } } },
  { position: { x: { name: "h", value: 8 }, y: { name: "3", value: 3 } } },

  { position: { x: { name: "a", value: 1 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn1", type: "pawn", side: "white" }, currentPiece: { name: "Pawn1", type: "pawn", side: "white" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn2", type: "pawn", side: "white" }, currentPiece: { name: "Pawn2", type: "pawn", side: "white" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn3", type: "pawn", side: "white" }, currentPiece: { name: "Pawn3", type: "pawn", side: "white" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn4", type: "pawn", side: "white" }, currentPiece: { name: "Pawn4", type: "pawn", side: "white" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn5", type: "pawn", side: "white" }, currentPiece: { name: "Pawn5", type: "pawn", side: "white" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn6", type: "pawn", side: "white" }, currentPiece: { name: "Pawn6", type: "pawn", side: "white" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn7", type: "pawn", side: "white" }, currentPiece: { name: "Pawn7", type: "pawn", side: "white" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn8", type: "pawn", side: "white" }, currentPiece: { name: "Pawn8", type: "pawn", side: "white" } },

  { position: { x: { name: "a", value: 1 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Rook1", type: "rook", side: "white" }, currentPiece: { name: "Rook1", type: "rook", side: "white" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Knight1", type: "knight", side: "white" }, currentPiece: { name: "Knight1", type: "knight", side: "white" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Bishop1", type: "bishop", side: "white" }, currentPiece: { name: "Bishop1", type: "bishop", side: "white" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "1", value: 1 } }, initialPiece: { name: "King", type: "king", side: "white" }, currentPiece: { name: "King", type: "king", side: "white" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Queen", type: "queen", side: "white" }, currentPiece: { name: "Queen", type: "queen", side: "white" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Bishop2", type: "bishop", side: "white" }, currentPiece: { name: "Bishop2", type: "bishop", side: "white" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Knight2", type: "knight", side: "white" }, currentPiece: { name: "Knight2", type: "knight", side: "white" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Rook2", type: "rook", side: "white" }, currentPiece: { name: "Rook2", type: "rook", side: "white" } },
];
