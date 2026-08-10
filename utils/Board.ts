type PositionX = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
type PositionY = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
export type Position = {
  x: { name?: PositionX; value: number };
  y: { name?: PositionY; value: number };
};
export type Board = Position[];

export const initialBoard: Board = [
  { x: { name: "a", value: 1 }, y: { name: "8", value: 8 } },
  { x: { name: "b", value: 2 }, y: { name: "8", value: 8 } },
  { x: { name: "c", value: 3 }, y: { name: "8", value: 8 } },
  { x: { name: "d", value: 4 }, y: { name: "8", value: 8 } },
  { x: { name: "e", value: 5 }, y: { name: "8", value: 8 } },
  { x: { name: "f", value: 6 }, y: { name: "8", value: 8 } },
  { x: { name: "g", value: 7 }, y: { name: "8", value: 8 } },
  { x: { name: "h", value: 8 }, y: { name: "8", value: 8 } },

  { x: { name: "a", value: 1 }, y: { name: "7", value: 7 } },
  { x: { name: "b", value: 2 }, y: { name: "7", value: 7 } },
  { x: { name: "c", value: 3 }, y: { name: "7", value: 7 } },
  { x: { name: "d", value: 4 }, y: { name: "7", value: 7 } },
  { x: { name: "e", value: 5 }, y: { name: "7", value: 7 } },
  { x: { name: "f", value: 6 }, y: { name: "7", value: 7 } },
  { x: { name: "g", value: 7 }, y: { name: "7", value: 7 } },
  { x: { name: "h", value: 8 }, y: { name: "7", value: 7 } },

  { x: { name: "a", value: 1 }, y: { name: "6", value: 6 } },
  { x: { name: "b", value: 2 }, y: { name: "6", value: 6 } },
  { x: { name: "c", value: 3 }, y: { name: "6", value: 6 } },
  { x: { name: "d", value: 4 }, y: { name: "6", value: 6 } },
  { x: { name: "e", value: 5 }, y: { name: "6", value: 6 } },
  { x: { name: "f", value: 6 }, y: { name: "6", value: 6 } },
  { x: { name: "g", value: 7 }, y: { name: "6", value: 6 } },
  { x: { name: "h", value: 8 }, y: { name: "6", value: 6 } },

  { x: { name: "a", value: 1 }, y: { name: "5", value: 5 } },
  { x: { name: "b", value: 2 }, y: { name: "5", value: 5 } },
  { x: { name: "c", value: 3 }, y: { name: "5", value: 5 } },
  { x: { name: "d", value: 4 }, y: { name: "5", value: 5 } },
  { x: { name: "e", value: 5 }, y: { name: "5", value: 5 } },
  { x: { name: "f", value: 6 }, y: { name: "5", value: 5 } },
  { x: { name: "g", value: 7 }, y: { name: "5", value: 5 } },
  { x: { name: "h", value: 8 }, y: { name: "5", value: 5 } },

  { x: { name: "a", value: 1 }, y: { name: "4", value: 4 } },
  { x: { name: "b", value: 2 }, y: { name: "4", value: 4 } },
  { x: { name: "c", value: 3 }, y: { name: "4", value: 4 } },
  { x: { name: "d", value: 4 }, y: { name: "4", value: 4 } },
  { x: { name: "e", value: 5 }, y: { name: "4", value: 4 } },
  { x: { name: "f", value: 6 }, y: { name: "4", value: 4 } },
  { x: { name: "g", value: 7 }, y: { name: "4", value: 4 } },
  { x: { name: "h", value: 8 }, y: { name: "4", value: 4 } },

  { x: { name: "a", value: 1 }, y: { name: "3", value: 3 } },
  { x: { name: "b", value: 2 }, y: { name: "3", value: 3 } },
  { x: { name: "c", value: 3 }, y: { name: "3", value: 3 } },
  { x: { name: "d", value: 4 }, y: { name: "3", value: 3 } },
  { x: { name: "e", value: 5 }, y: { name: "3", value: 3 } },
  { x: { name: "f", value: 6 }, y: { name: "3", value: 3 } },
  { x: { name: "g", value: 7 }, y: { name: "3", value: 3 } },
  { x: { name: "h", value: 8 }, y: { name: "3", value: 3 } },

  { x: { name: "a", value: 1 }, y: { name: "2", value: 2 } },
  { x: { name: "b", value: 2 }, y: { name: "2", value: 2 } },
  { x: { name: "c", value: 3 }, y: { name: "2", value: 2 } },
  { x: { name: "d", value: 4 }, y: { name: "2", value: 2 } },
  { x: { name: "e", value: 5 }, y: { name: "2", value: 2 } },
  { x: { name: "f", value: 6 }, y: { name: "2", value: 2 } },
  { x: { name: "g", value: 7 }, y: { name: "2", value: 2 } },
  { x: { name: "h", value: 8 }, y: { name: "2", value: 2 } },

  { x: { name: "a", value: 1 }, y: { name: "1", value: 1 } },
  { x: { name: "b", value: 2 }, y: { name: "1", value: 1 } },
  { x: { name: "c", value: 3 }, y: { name: "1", value: 1 } },
  { x: { name: "d", value: 4 }, y: { name: "1", value: 1 } },
  { x: { name: "e", value: 5 }, y: { name: "1", value: 1 } },
  { x: { name: "f", value: 6 }, y: { name: "1", value: 1 } },
  { x: { name: "g", value: 7 }, y: { name: "1", value: 1 } },
  { x: { name: "h", value: 8 }, y: { name: "1", value: 1 } },
];
