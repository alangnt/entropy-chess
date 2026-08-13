export type PieceType = "king" | "queen" | "rook" | "knight" | "bishop" | "pawn";
export type Side = "black" | "white";
type RawPiece = { name: string; type: PieceType };
export type Piece = RawPiece & { side: Side; imageUrl: string; hasEverMoved: boolean; };