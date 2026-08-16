import { Piece } from "./Pieces";

type PositionX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
type PositionY = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type Position = {
  x: { name?: PositionX; value: number };
  y: { name?: PositionY; value: number };
};
export type Move = Position & { isEnPassantMove?: boolean };
export type Tile = { position: Position; piece?: Piece };
export type Board = Tile[];

export const initialBoard: Board = [
  { position: { x: { name: "a", value: 1 }, y: { name: "8", value: 8 } }, piece: { name: "Rook1", type: "rook", side: "black", imageUrl: "/pieces/rook/black.svg", hasEverMoved: false } },
  { position: { x: { name: "b", value: 2 }, y: { name: "8", value: 8 } }, piece: { name: "Knight1", type: "knight", side: "black", imageUrl: "/pieces/knight/black.svg", hasEverMoved: false } },
  { position: { x: { name: "c", value: 3 }, y: { name: "8", value: 8 } }, piece: { name: "Bishop1", type: "bishop", side: "black", imageUrl: "/pieces/bishop/black.svg", hasEverMoved: false } },
  { position: { x: { name: "d", value: 4 }, y: { name: "8", value: 8 } }, piece: { name: "Queen", type: "queen", side: "black", imageUrl: "/pieces/queen/black.svg", hasEverMoved: false } },
  { position: { x: { name: "e", value: 5 }, y: { name: "8", value: 8 } }, piece: { name: "King", type: "king", side: "black", imageUrl: "/pieces/king/black.svg", hasEverMoved: false } },
  { position: { x: { name: "f", value: 6 }, y: { name: "8", value: 8 } }, piece: { name: "Bishop2", type: "bishop", side: "black", imageUrl: "/pieces/bishop/black.svg", hasEverMoved: false } },
  { position: { x: { name: "g", value: 7 }, y: { name: "8", value: 8 } }, piece: { name: "Knight2", type: "knight", side: "black", imageUrl: "/pieces/knight/black.svg", hasEverMoved: false } },
  { position: { x: { name: "h", value: 8 }, y: { name: "8", value: 8 } }, piece: { name: "Rook2", type: "rook", side: "black", imageUrl: "/pieces/rook/black.svg", hasEverMoved: false } },

  { position: { x: { name: "a", value: 1 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn1", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "b", value: 2 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn2", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "c", value: 3 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn3", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "d", value: 4 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn4", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "e", value: 5 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn5", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "f", value: 6 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn6", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "g", value: 7 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn7", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },
  { position: { x: { name: "h", value: 8 }, y: { name: "7", value: 7 } }, piece: { name: "Pawn8", type: "pawn", side: "black", imageUrl: "/pieces/pawn/black.svg", hasEverMoved: false } },

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

  { position: { x: { name: "a", value: 1 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn1", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "b", value: 2 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn2", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "c", value: 3 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn3", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "d", value: 4 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn4", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "e", value: 5 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn5", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "f", value: 6 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn6", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "g", value: 7 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn7", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },
  { position: { x: { name: "h", value: 8 }, y: { name: "2", value: 2 } }, piece: { name: "Pawn8", type: "pawn", side: "white", imageUrl: "/pieces/pawn/white.svg", hasEverMoved: false } },

  { position: { x: { name: "a", value: 1 }, y: { name: "1", value: 1 } }, piece: { name: "Rook1", type: "rook", side: "white", imageUrl: "/pieces/rook/white.svg", hasEverMoved: false } },
  { position: { x: { name: "b", value: 2 }, y: { name: "1", value: 1 } }, piece: { name: "Knight1", type: "knight", side: "white", imageUrl: "/pieces/knight/white.svg", hasEverMoved: false } },
  { position: { x: { name: "c", value: 3 }, y: { name: "1", value: 1 } }, piece: { name: "Bishop1", type: "bishop", side: "white", imageUrl: "/pieces/bishop/white.svg", hasEverMoved: false } },
  { position: { x: { name: "d", value: 4 }, y: { name: "1", value: 1 } }, piece: { name: "Queen", type: "queen", side: "white", imageUrl: "/pieces/queen/white.svg", hasEverMoved: false } },
  { position: { x: { name: "e", value: 5 }, y: { name: "1", value: 1 } }, piece: { name: "King", type: "king", side: "white", imageUrl: "/pieces/king/white.svg", hasEverMoved: false } },
  { position: { x: { name: "f", value: 6 }, y: { name: "1", value: 1 } }, piece: { name: "Bishop2", type: "bishop", side: "white", imageUrl: "/pieces/bishop/white.svg", hasEverMoved: false } },
  { position: { x: { name: "g", value: 7 }, y: { name: "1", value: 1 } }, piece: { name: "Knight2", type: "knight", side: "white", imageUrl: "/pieces/knight/white.svg", hasEverMoved: false } },
  { position: { x: { name: "h", value: 8 }, y: { name: "1", value: 1 } }, piece: { name: "Rook2", type: "rook", side: "white", imageUrl: "/pieces/rook/white.svg", hasEverMoved: false } }
];
