import { Board, Move, Position, Tile } from "./Board";
import { Piece, PieceType, Side } from "./Pieces";
import { toKey } from "./positionToKey";

const calculateCastlingMoves = (selectedTile: Tile, board: Board, side: Side): Move[] => {
  const piece = selectedTile.piece!;
  const pieceType: "king" | "rook" = piece.type as "king" | "rook";

  if (piece.hasEverMoved) return [];

  let castlingMoves: Move[] = [];

  const yPositionValue = side === "black" ? 8 : 1;

  const restOfLeftLine = board.filter(tile => tile.position.y.value === yPositionValue && tile.position.x.value > 1 && tile.position.x.value < 5);
  const restOfRightLine = board.filter(tile => tile.position.y.value === yPositionValue && tile.position.x.value > 5 && tile.position.x.value < 8);

  switch (pieceType) {
    case "king":
      const leftRookTile = board.find(tile => tile.position.x.value === 1 && tile.position.y.value === yPositionValue);
      const rightRookTile = board.find(tile => tile.position.x.value === 8 && tile.position.y.value === yPositionValue);

      if (restOfLeftLine.filter(tile => tile.piece).length === 0 && leftRookTile?.piece && !leftRookTile.piece.hasEverMoved) castlingMoves.push(leftRookTile.position);
      if (restOfRightLine.filter(tile => tile.piece).length === 0 && rightRookTile?.piece && !rightRookTile.piece.hasEverMoved) castlingMoves.push(rightRookTile.position);
      break;
    case "rook":
      const kingTile = board.find(tile => tile.position.x.value === 5 && tile.position.y.value === yPositionValue);

      if (!kingTile?.piece || kingTile.piece.hasEverMoved) return [];
      if (selectedTile.position.x.value === 1) {
        if (restOfLeftLine.filter(tile => tile.piece).length === 0) castlingMoves.push(kingTile.position);
      } else {
        if (restOfRightLine.filter(tile => tile.piece).length === 0) castlingMoves.push(kingTile.position);
      }
  }

  return castlingMoves;
}

const calculateEnPassantMoves = (selectedTile: Tile, board: Board, side: Side): Move[] => {
  const enPassantMoves: Move[] = [];

  if ((side === "black" && selectedTile.position.y.value === 4)) {
    const leftTile = board.find(tile => tile.position.x.value === selectedTile.position.x.value - 1 && tile.position.y.value === selectedTile.position.y.value);
    const rightTile = board.find(tile => tile.position.x.value === selectedTile.position.x.value + 1 && tile.position.y.value === selectedTile.position.y.value);

    if (leftTile && leftTile.piece && leftTile.piece.type === "pawn" && leftTile.piece.canBeEnPassant) enPassantMoves.push({ ...leftTile.position, y: { value: 3 }, isEnPassantMove: true });
    if (rightTile && rightTile.piece && rightTile.piece.type === "pawn" && rightTile.piece.canBeEnPassant) enPassantMoves.push({ ...rightTile.position, y: { value: 3 }, isEnPassantMove: true });
  } else if (side === "white" && selectedTile.position.y.value === 5) {
    const leftTile = board.find(tile => tile.position.x.value === selectedTile.position.x.value - 1 && tile.position.y.value === selectedTile.position.y.value);
    const rightTile = board.find(tile => tile.position.x.value === selectedTile.position.x.value + 1 && tile.position.y.value === selectedTile.position.y.value);

    if (leftTile && leftTile.piece && leftTile.piece.type === "pawn" && leftTile.piece.canBeEnPassant) enPassantMoves.push({ ...leftTile.position, y: { value: 6 }, isEnPassantMove: true });
    if (rightTile && rightTile.piece && rightTile.piece.type === "pawn" && rightTile.piece.canBeEnPassant) enPassantMoves.push({ ...rightTile.position, y: { value: 6 }, isEnPassantMove: true });
  }

  return enPassantMoves;
}

const calculateKingMoves = (position: Position): Move[] => {
  let moves: Move[] = [];

  moves.push({ x: { value: position.x.value - 1 }, y: { value: position.y.value + 1 } }); // top left
  moves.push({ x: { value: position.x.value }, y: { value: position.y.value + 1 } }); // top
  moves.push({ x: { value: position.x.value + 1 }, y: { value: position.y.value + 1 } }); // top right
  moves.push({ x: { value: position.x.value - 1 }, y: { value: position.y.value } }); // left
  moves.push({ x: { value: position.x.value + 1 }, y: { value: position.y.value } }); // right
  moves.push({ x: { value: position.x.value - 1 }, y: { value: position.y.value - 1 } }); // bottom left
  moves.push({ x: { value: position.x.value }, y: { value: position.y.value - 1 } }); // bottom
  moves.push({ x: { value: position.x.value + 1 }, y: { value: position.y.value - 1 } }); // bottom right

  return moves;
}

const calculateQueenMoves = (selectedTile: Tile, board: Board, side: Side): Move[] => {
  let moves: Move[] = [];

  const rookMoves = calculateRookMoves(selectedTile, board, side);
  const bishopMoves = calculateBishopMoves(selectedTile, board, side);

  moves = [...rookMoves, ...bishopMoves];

  return moves;
}

const calculateRookMoves = (selectedTile: Tile, board: Board, side: Side): Move[] => {
  let moves: Move[] = [];

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

const calculateKnightMoves = (position: Position): Move[] => {
  let moves: Move[] = [];

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

const calculateBishopMoves = (selectedTile: Tile, board: Board, side: Side): Move[] => {
  let moves: Move[] = [];

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

const calculatePawnMoves = (position: Position, board: Board, side: Side, piece: Piece): Move[] => {
  let moves: Move[] = [];

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

export const calculateAllowedMoves = (selectedTile: Tile, board: Board): Move[] => {
  const position = selectedTile.position;
  const piece = selectedTile!.piece!;
  const type: PieceType = piece.type;
  const side: Side = piece.side;

  let moves: Position[] = [];
  let castlingMoves: Position[] = [];
  let enPassantMoves: Position[] = [];

  switch (type) {
    case "king":
      castlingMoves = calculateCastlingMoves(selectedTile, board, side);
      moves = calculateKingMoves(position);
      break;
    case "queen":
      moves = calculateQueenMoves(selectedTile, board, side);
      break;
    case "rook":
      castlingMoves = calculateCastlingMoves(selectedTile, board, side);
      moves = calculateRookMoves(selectedTile, board, side);
      break;
    case "knight":
      moves = calculateKnightMoves(position);
      break;
    case "bishop":
      moves = calculateBishopMoves(selectedTile, board, side);
      break;
    case "pawn":
      enPassantMoves = calculateEnPassantMoves(selectedTile, board, side);
      moves = calculatePawnMoves(position, board, side, piece);
      break;
    default:
      break;
  }

  const filteredMoves = moves.filter((move) => toKey(move) !== toKey(board.find((tile) => toKey(move) === toKey(tile.piece && tile.piece.side === side ? tile.position : null))?.position ?? null))
  const movesWithCastlingMoves = castlingMoves.length > 0 ? [...castlingMoves, ...filteredMoves] : filteredMoves;
  const movesWithEnPassantMoves = enPassantMoves.length > 0 ? [...enPassantMoves, ...movesWithCastlingMoves] : movesWithCastlingMoves;

  return movesWithEnPassantMoves;
}