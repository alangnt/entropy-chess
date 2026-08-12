import { Board, Position, Tile } from "./Board";
import { Piece, PieceType, Side } from "./Pieces";
import { isSamePiece } from "./isSamePiece";
import { toKey } from "./positionToKey";

const calculateKingMoves = (position: Position): Position[] => {
  let moves: Position[] = [];

  moves.push({ x: { value: position.x.value - 1 }, y: { value: position.y.value + 1 } }); // top left
  moves.push({ x: { value: position.x.value }, y: { value: position.y.value + 1 } }); // top
  moves.push({ x: { value: position.x.value + 1 }, y: { value: position.y.value + 1 } }); // top right
  moves.push({ x: { value: position.x.value - 1 }, y: { value: position.y.value } }); // left
  moves.push({ x: { value: position.x.value + 1 }, y: { value: position.y.value } }); // right
  moves.push({ x: { value: position.x.value - 1 }, y: { value: position.y.value -1 } }); // bottom left
  moves.push({ x: { value: position.x.value }, y: { value: position.y.value -1 } }); // bottom
  moves.push({ x: { value: position.x.value + 1 }, y: { value: position.y.value -1 } }); // bottom right

  return moves;
}

const calculateQueenMoves = (selectedTile: Tile, board: Board, side: Side): Position[] => {
  let moves: Position[] = [];

  const rookMoves = calculateRookMoves(selectedTile, board, side);
  const bishopMoves = calculateBishopMoves(selectedTile, board, side);

  moves = [...rookMoves, ...bishopMoves];

  return moves;
}

const calculateRookMoves = (selectedTile: Tile, board: Board, side: Side): Position[] => {
  let moves: Position[] = [];

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

  return moves;
}

const calculateKnightMoves = (position: Position): Position[] => {
  let moves: Position[] = [];

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

  return moves;
}

const calculateBishopMoves = (selectedTile: Tile, board: Board, side: Side): Position[] => {
  let moves: Position[] = [];

  let positionX = selectedTile.position.x.value;
  let positionY = selectedTile.position.y.value;

  do { // top left
    const position = { x: { value: positionX }, y: { value: positionY } };

    const tile = board.find((tile) => toKey(tile.position) === toKey(position)) ?? null;
    const isSelectedPiece = !!(tile && toKey(tile.position) === toKey(selectedTile.position));

    if (tile && tile.currentPiece && tile.currentPiece.side === side && !isSelectedPiece) break;
    if (tile && tile.currentPiece && tile.currentPiece.side !== side && !isSelectedPiece) {
      moves.push(position);
      break;
    }

    moves.push(position);

    positionX -= 1;
    positionY += 1;
  } while (positionX >= 1 && positionY <= 8)
  positionX = selectedTile.position.x.value;
  positionY = selectedTile.position.y.value;

  do { // top right
    const position = { x: { value: positionX }, y: { value: positionY } };

    const tile = board.find((tile) => toKey(tile.position) === toKey(position)) ?? null;
    const isSelectedPiece = !!(tile && toKey(tile.position) === toKey(selectedTile.position));

    if (tile && tile.currentPiece && tile.currentPiece.side === side && !isSelectedPiece) break;
    if (tile && tile.currentPiece && tile.currentPiece.side !== side && !isSelectedPiece) {
      moves.push(position);
      break;
    }

    moves.push(position);
    positionX += 1;
    positionY += 1;
  } while (positionX <= 8 && positionY <= 8)
  positionX = selectedTile.position.x.value;
  positionY = selectedTile.position.y.value;

  do { // bottom left
    const position = { x: { value: positionX }, y: { value: positionY } };

    const tile = board.find((tile) => toKey(tile.position) === toKey(position)) ?? null;
    const isSelectedPiece = !!(tile && toKey(tile.position) === toKey(selectedTile.position));

    if (tile && tile.currentPiece && tile.currentPiece.side === side && !isSelectedPiece) break;
    if (tile && tile.currentPiece && tile.currentPiece.side !== side && !isSelectedPiece) {
      moves.push(position);
      break;
    }

    moves.push(position);
    positionX -= 1;
    positionY -= 1;
  } while (positionX >= 1 && positionY >= 1)
  positionX = selectedTile.position.x.value;
  positionY = selectedTile.position.y.value;

  do { // bottom right
    const position = { x: { value: positionX }, y: { value: positionY } };

    const tile = board.find((tile) => toKey(tile.position) === toKey(position)) ?? null;
    const isSelectedPiece = !!(tile && toKey(tile.position) === toKey(selectedTile.position));

    if (tile && tile.currentPiece && tile.currentPiece.side === side && !isSelectedPiece) break;
    if (tile && tile.currentPiece && tile.currentPiece.side !== side && !isSelectedPiece) {
      moves.push(position);
      break;
    }

    moves.push(position);
    positionX += 1;
    positionY -= 1;
  } while (positionX <= 8 && positionY >= 1)
  positionX = selectedTile.position.x.value;
  positionY = selectedTile.position.y.value;

  return moves;
}

const calculatePawnMoves = (position: Position, board: Board, side: Side, initialPiece: Piece | null, currentPiece: Piece): Position[] => {
  let moves: Position[] = [];

  const topTile = board.find((tile) => tile.position.x.value === position.x.value && tile.position.y.value === position.y.value + 1);
  const topTwoTile = board.find((tile) => tile.position.x.value === position.x.value && tile.position.y.value === position.y.value + 2);
  const topLeftTile = board.find((tile) => tile.position.x.value === position.x.value - 1 && tile.position.y.value === position.y.value + 1);
  const topRightTile = board.find((tile) => tile.position.x.value === position.x.value + 1 && tile.position.y.value === position.y.value + 1);
  const bottomTile = board.find((tile) => tile.position.x.value === position.x.value && tile.position.y.value === position.y.value - 1);
  const bottomTwoTile = board.find((tile) => tile.position.x.value === position.x.value && tile.position.y.value === position.y.value - 2);
  const bottomLeftTile = board.find((tile) => tile.position.x.value === position.x.value - 1 && tile.position.y.value === position.y.value - 1);
  const bottomRightTile = board.find((tile) => tile.position.x.value === position.x.value + 1 && tile.position.y.value === position.y.value - 1);

  if (side === "black") {
    if (bottomTile && !bottomTile.currentPiece) moves.push({ x: { value: position.x.value }, y: { value: position.y.value - 1 } });
    if (initialPiece && isSamePiece(initialPiece, currentPiece) && bottomTwoTile && !bottomTwoTile.currentPiece && bottomTile && !bottomTile.currentPiece) {
      moves.push({ x: { value: position.x.value }, y: { value: position.y.value - 2 } });
    }
    if (bottomLeftTile && bottomLeftTile.currentPiece && bottomLeftTile.currentPiece.side === "white") moves.push(bottomLeftTile.position);
    if (bottomRightTile && bottomRightTile.currentPiece && bottomRightTile.currentPiece.side === "white") moves.push(bottomRightTile.position);
  } else {
    if (topTile && !topTile.currentPiece) moves.push({ x: { value: position.x.value }, y: { value: position.y.value + 1 } });
    if (initialPiece && isSamePiece(initialPiece, currentPiece) && topTwoTile && !topTwoTile.currentPiece && topTile && !topTile.currentPiece) {
      moves.push({ x: { value: position.x.value }, y: { value: position.y.value + 2 } });
    }
    if (topLeftTile && topLeftTile.currentPiece && topLeftTile.currentPiece.side === "black") moves.push(topLeftTile.position);
    if (topRightTile && topRightTile.currentPiece && topRightTile.currentPiece.side === "black") moves.push(topRightTile.position);
  }

  return moves;
}

export const calculateAllowedMoves = (selectedTile: Tile, board: Board): Position[] => {
  const position = selectedTile.position;
  const initialPiece = selectedTile?.initialPiece ?? null;
  const currentPiece = selectedTile!.currentPiece!;
  const type: PieceType = currentPiece.type;
  const side: Side = currentPiece.side;

  let moves: Position[] = [];

  switch (type) {
    case "king":
      moves = calculateKingMoves(position);
      break;
    case "queen":
      moves = calculateQueenMoves(selectedTile, board, side);
      break;
    case "rook":
      moves = calculateRookMoves(selectedTile, board, side);
      break;
    case "knight":
      moves = calculateKnightMoves(position);
      break;
    case "bishop":
      moves = calculateBishopMoves(selectedTile, board, side);
      break;
    case "pawn":
      moves = calculatePawnMoves(position, board, side, initialPiece, currentPiece);
      break;
    default:
      break;
  }

  const filteredMoves = moves.filter((move) => toKey(move) !== toKey(board.find((tile) => toKey(move) === toKey(tile.currentPiece && tile.currentPiece.side === side ? tile.position : null))?.position ?? null))
  return filteredMoves;
}