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
  { position: { x: { name: "a", value: 1 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Rook1", type: "rook", side: "black", imageUrl: "/pieces/rook/black.svg" }, currentPiece: { name: "Rook1", type: "rook", side: "black", imageUrl: "/pieces/rook/black.svg" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Knight1", type: "knight", side: "black", imageUrl: "/pieces/knight/black.svg" }, currentPiece: { name: "Knight1", type: "knight", side: "black", imageUrl: "/pieces/knight/black.svg" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Bishop1", type: "bishop", side: "black", imageUrl: "/pieces/bishop/black.svg" }, currentPiece: { name: "Bishop1", type: "bishop", side: "black", imageUrl: "/pieces/bishop/black.svg" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "8", value: 8 } }, initialPiece: { name: "King", type: "king", side: "black", imageUrl: "/pieces/king/black.svg" }, currentPiece: { name: "King", type: "king", side: "black", imageUrl: "/pieces/king/black.svg" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Queen", type: "queen", side: "black", imageUrl: "/pieces/queen/black.svg" }, currentPiece: { name: "Queen", type: "queen", side: "black", imageUrl: "/pieces/queen/black.svg" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Bishop2", type: "bishop", side: "black", imageUrl: "/pieces/bishop/black.svg" }, currentPiece: { name: "Bishop2", type: "bishop", side: "black", imageUrl: "/pieces/bishop/black.svg" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Knight2", type: "knight", side: "black", imageUrl: "/pieces/knight/black.svg" }, currentPiece: { name: "Knight2", type: "knight", side: "black", imageUrl: "/pieces/knight/black.svg" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "8", value: 8 } }, initialPiece: { name: "Rook2", type: "rook", side: "black", imageUrl: "/pieces/rook/black.svg" }, currentPiece: { name: "Rook2", type: "rook", side: "black", imageUrl: "/pieces/rook/black.svg" } },

  { position: { x: { name: "a", value: 1 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn1", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn1", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn2", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn2", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn3", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn3", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn4", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn4", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn5", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn5", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn6", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn6", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn7", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn7", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "7", value: 7 } }, initialPiece: { name: "Pawn8", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" }, currentPiece: { name: "Pawn8", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg" } },

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

  { position: { x: { name: "a", value: 1 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn1", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn1", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn2", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn2", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn3", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn3", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn4", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn4", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn5", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn5", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn6", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn6", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn7", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn7", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "2", value: 2 } }, initialPiece: { name: "Pawn8", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" }, currentPiece: { name: "Pawn8", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg" } },

  { position: { x: { name: "a", value: 1 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Rook1", type: "rook", side: "white", imageUrl: "/pieces/rook/white.svg" }, currentPiece: { name: "Rook1", type: "rook", side: "white", imageUrl: "/pieces/rook/white.svg" } },
  { position: { x: { name: "b", value: 2 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Knight1", type: "knight", side: "white", imageUrl: "/pieces/knight/white.svg" }, currentPiece: { name: "Knight1", type: "knight", side: "white", imageUrl: "/pieces/knight/white.svg" } },
  { position: { x: { name: "c", value: 3 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Bishop1", type: "bishop", side: "white", imageUrl: "/pieces/bishop/white.svg" }, currentPiece: { name: "Bishop1", type: "bishop", side: "white", imageUrl: "/pieces/bishop/white.svg" } },
  { position: { x: { name: "d", value: 4 }, y: { name: "1", value: 1 } }, initialPiece: { name: "King", type: "king", side: "white", imageUrl: "/pieces/king/white.svg" }, currentPiece: { name: "King", type: "king", side: "white", imageUrl: "/pieces/king/white.svg" } },
  { position: { x: { name: "e", value: 5 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Queen", type: "queen", side: "white", imageUrl: "/pieces/queen/white.svg" }, currentPiece: { name: "Queen", type: "queen", side: "white", imageUrl: "/pieces/queen/white.svg" } },
  { position: { x: { name: "f", value: 6 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Bishop2", type: "bishop", side: "white", imageUrl: "/pieces/bishop/white.svg" }, currentPiece: { name: "Bishop2", type: "bishop", side: "white", imageUrl: "/pieces/bishop/white.svg" } },
  { position: { x: { name: "g", value: 7 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Knight2", type: "knight", side: "white", imageUrl: "/pieces/knight/white.svg" }, currentPiece: { name: "Knight2", type: "knight", side: "white", imageUrl: "/pieces/knight/white.svg" } },
  { position: { x: { name: "h", value: 8 }, y: { name: "1", value: 1 } }, initialPiece: { name: "Rook2", type: "rook", side: "white", imageUrl: "/pieces/rook/white.svg" }, currentPiece: { name: "Rook2", type: "rook", side: "white", imageUrl: "/pieces/rook/white.svg" } },
];
