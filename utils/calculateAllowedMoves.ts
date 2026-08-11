import { Board, Position, Tile } from "./Board";
import { PieceType } from "./Pieces";
import { isSamePiece } from "./isSamePiece";
import { toKey } from "./positionToKey";

export const calculateAllowedMoves = (selectedTile: Tile, board: Board): Position[] => {
    const position = selectedTile.position;
    const initialPiece = selectedTile?.initialPiece ?? null;
    const currentPiece = selectedTile!.currentPiece!;
    const type: PieceType = currentPiece.type;
    const side = currentPiece.side;

    let moves: Position[] = [];

    switch (type) {
      case "king":
        break;
      case "queen":
        break;
      case "rook":
        const horizontalTiles = board.filter((tile) => tile.position.x.value === selectedTile.position.x.value && tile.position.y.value !== selectedTile.position.y.value);
        const verticalTiles = board.filter((tile) => tile.position.y.value === selectedTile.position.y.value && tile.position.x.value !== selectedTile.position.x.value);

        const horizontalTilesLeft = verticalTiles.filter((tile) => tile.position.x.value < selectedTile.position.x.value).reverse(); // left
        const horizontalTilesRight = verticalTiles.filter((tile) => tile.position.x.value > selectedTile.position.x.value); // right
        const verticalTilesTop = horizontalTiles.filter((tile) => tile.position.y.value > selectedTile.position.y.value).reverse(); // top
        const verticalTilesBottom = horizontalTiles.filter((tile) => tile.position.y.value < selectedTile.position.y.value); // bottom

        for (const tile of horizontalTilesLeft) {
          if (tile.currentPiece && tile.currentPiece.side === side) break;
          if (tile.currentPiece && tile.currentPiece.side !== side) {
            moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
            break;
          }
          moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
        }
        for (const tile of horizontalTilesRight) {
          if (tile.currentPiece && tile.currentPiece.side === side) break;
          if (tile.currentPiece && tile.currentPiece.side !== side) {
            moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
            break;
          }
          moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
        }
        for (const tile of verticalTilesTop) {
          if (tile.currentPiece && tile.currentPiece.side === side) break;
          if (tile.currentPiece && tile.currentPiece.side !== side) {
            moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
            break;
          }
          moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
        }
        for (const tile of verticalTilesBottom) {
          if (tile.currentPiece && tile.currentPiece.side === side) break;
          if (tile.currentPiece && tile.currentPiece.side !== side) {
            moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
            break;
          }
          moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
        }
        break;
      case "knight":
        moves.push(
          { x: { value: position.x.value - 1 }, y: { value: position.y.value + 2 } },
          { x: { value: position.x.value + 1 }, y: { value: position.y.value + 2 } },
          { x: { value: position.x.value - 1 }, y: { value: position.y.value - 2 } },
          { x: { value: position.x.value + 1 }, y: { value: position.y.value - 2 } },
          { x: { value: position.x.value - 2 }, y: { value: position.y.value + 1 } },
          { x: { value: position.x.value + 2 }, y: { value: position.y.value + 1 } },
          { x: { value: position.x.value - 2 }, y: { value: position.y.value - 1 } },
          { x: { value: position.x.value + 2 }, y: { value: position.y.value - 1 } },
        );
        break;
      case "bishop":
        break;
      case "pawn":
        moves.push({ 
          x: { value: position.x.value }, 
          y: { value: side === "black" ? position.y.value - 1 : position.y.value + 1 }
        });
        if (initialPiece && isSamePiece(initialPiece, currentPiece)) {
          moves.push({ 
            x: { value: position.x.value }, 
            y: { value: side === "black" ? position.y.value - 2 : position.y.value + 2 } 
          });
        }
        break;
      default:
        break;
    }

    const filteredMoves = moves.filter((move) => toKey(move) !== toKey(board.find((tile) => toKey(move) === toKey(tile.currentPiece && tile.currentPiece.side === side ? tile.position : null))?.position ?? null))
    return filteredMoves;
  }