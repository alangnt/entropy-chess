import { Board, Position, Tile } from "./Board";
import { PieceType } from "./Pieces";
import { isSamePiece } from "./isSamePiece";
import { toKey } from "./positionToKey";

export const calculateAllowedMoves = (tile: Tile, board: Board): Position[] => {
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
        moves.push(
          { x: { value: position.x.value - 1 }, y: { value: position.y.value + 2 } },
          { x: { value: position.x.value + 1 }, y: { value: position.y.value + 2 } },
          { x: { value: position.x.value - 1 }, y: { value: position.y.value - 2 } },
          { x: { value: position.x.value + 1 }, y: { value: position.y.value - 2 } }
        );
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
        break;
      default:
        break;
    }

    const filteredMoves = moves.filter((move) => toKey(move) !== toKey(board.find((tile) => toKey(move) === toKey(tile.currentPiece && tile.currentPiece.side === "white" ? tile.position : null))?.position ?? null))
    return filteredMoves;
  }