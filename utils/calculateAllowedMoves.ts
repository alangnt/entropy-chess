import { Position, Tile } from "./Board";
import { PieceType } from "./Pieces";
import { isSamePiece } from "./isSamePiece";

export const calculateAllowedMoves = (tile: Tile): Position[] => {
    const position = tile.position;
    const initialPiece = tile?.initialPiece ?? null;
    const currentPiece = tile!.currentPiece!;
    const type: PieceType = currentPiece.type;

    let moves: Position[] = [];

    switch (type) {
      case "king":
        break;
      case "queen":
        break;
      case "rook":
        break;
      case "knight":
        break;
      case "bishop":
        break;
      case "pawn":
        moves.push({ 
          x: { value: position.x.value }, 
          y: { value: position.y.value + 1 } 
        });
        if (initialPiece && isSamePiece(initialPiece, currentPiece)) {
          moves.push({ 
            x: { value: position.x.value }, 
            y: { value: position.y.value + 2 } 
          });
        }
      default:
        break;
    }

    return moves;
  }