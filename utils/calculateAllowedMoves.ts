import { Board, Position, Tile } from "./Board";
import { Piece, PieceType, Side } from "./Pieces";
import { toKey } from "./positionToKey";

const canCastlingMove = (selectedTile: Tile, board: Board, side: Side) => {
  if (side === "black") {
    const leftRook = board.find(tile => tile.position.x.value === 1 && tile.position.y.value === 1);
    const rightRook = board.find(tile => tile.position.x.value === 8 && tile.position.y.value === 1);
  }
}

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
    if (tile.piece && tile.piece.side === side) break;
    if (tile.piece && tile.piece.side !== side) {
      moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
      break;
    }
    moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
  }
  for (const tile of horizontalTilesRight) {
    if (tile.piece && tile.piece.side === side) break;
    if (tile.piece && tile.piece.side !== side) {
      moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
      break;
    }
    moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
  }
  for (const tile of verticalTilesTop) {
    if (tile.piece && tile.piece.side === side) break;
    if (tile.piece && tile.piece.side !== side) {
      moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
      break;
    }
    moves.push({ x: { value: tile.position.x.value }, y: { value: tile.position.y.value } });
  }
  for (const tile of verticalTilesBottom) {
    if (tile.piece && tile.piece.side === side) break;
    if (tile.piece && tile.piece.side !== side) {
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

    if (tile && tile.piece && tile.piece.side === side && !isSelectedPiece) break;
    if (tile && tile.piece && tile.piece.side !== side && !isSelectedPiece) {
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

    if (tile && tile.piece && tile.piece.side === side && !isSelectedPiece) break;
    if (tile && tile.piece && tile.piece.side !== side && !isSelectedPiece) {
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

    if (tile && tile.piece && tile.piece.side === side && !isSelectedPiece) break;
    if (tile && tile.piece && tile.piece.side !== side && !isSelectedPiece) {
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

    if (tile && tile.piece && tile.piece.side === side && !isSelectedPiece) break;
    if (tile && tile.piece && tile.piece.side !== side && !isSelectedPiece) {
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

const calculatePawnMoves = (position: Position, board: Board, side: Side, piece: Piece): Position[] => {
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
    if (bottomTile && !bottomTile.piece) moves.push({ x: { value: position.x.value }, y: { value: position.y.value - 1 } });
    if (piece && !piece.hasEverMoved && bottomTwoTile && !bottomTwoTile.piece && bottomTile && !bottomTile.piece) {
      moves.push({ x: { value: position.x.value }, y: { value: position.y.value - 2 } });
    }
    if (bottomLeftTile && bottomLeftTile.piece && bottomLeftTile.piece.side === "white") moves.push(bottomLeftTile.position);
    if (bottomRightTile && bottomRightTile.piece && bottomRightTile.piece.side === "white") moves.push(bottomRightTile.position);
  } else {
    if (topTile && !topTile.piece) moves.push({ x: { value: position.x.value }, y: { value: position.y.value + 1 } });
    if (piece && !piece.hasEverMoved && topTwoTile && !topTwoTile.piece && topTile && !topTile.piece) {
      moves.push({ x: { value: position.x.value }, y: { value: position.y.value + 2 } });
    }
    if (topLeftTile && topLeftTile.piece && topLeftTile.piece.side === "black") moves.push(topLeftTile.position);
    if (topRightTile && topRightTile.piece && topRightTile.piece.side === "black") moves.push(topRightTile.position);
  }

  return moves;
}

export const calculateAllowedMoves = (selectedTile: Tile, board: Board): Position[] => {
  const position = selectedTile.position;
  const piece = selectedTile!.piece!;
  const type: PieceType = piece.type;
  const side: Side = piece.side;

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
      moves = calculatePawnMoves(position, board, side, piece);
      break;
    default:
      break;
  }

  const filteredMoves = moves.filter((move) => toKey(move) !== toKey(board.find((tile) => toKey(move) === toKey(tile.piece && tile.piece.side === side ? tile.position : null))?.position ?? null))
  return filteredMoves;
}