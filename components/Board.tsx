import { Board, initialBoard, Move, Tile } from "@/utils/Board";
import { calculateAllowedMoves } from "@/utils/calculateAllowedMoves";
import { Piece, Side } from "@/utils/Pieces";
import { toKey } from "@/utils/positionToKey";
import { useEffect, useState } from "react";
import Image from "next/image";

type BoardProps = {
  turn: Side;
  setTurn: (value: Side) => void;
  selectedTile: Tile | null;
  setSelectedTile: (value: Tile | null) => void;
  selectedNewTile: Tile | null;
  setSelectedNewTile: (value: Tile | null) => void;
  lostPieces: Piece[];
  setLostPieces: (value: Piece[]) => void;
  isPromoting: boolean;
  setIsPromoting: (value: boolean) => void;
  selectedPromotionPiece: Piece | null;
}

export default function BoardComponent({
  turn,
  setTurn,
  selectedTile,
  setSelectedTile,
  selectedNewTile,
  setSelectedNewTile,
  lostPieces,
  setLostPieces,
  isPromoting,
  setIsPromoting,
  selectedPromotionPiece
}: BoardProps) {
  const [board, setBoard] = useState<Board>(initialBoard);

  const [allowedMoves, setAllowedMoves] = useState<Move[]>([]);

  const selectTile = (tile: Tile): void => {
    if (selectedTile === tile) return setSelectedTile(null);
    setSelectedTile(tile);
  }

  const promotePawn = (side: Side) => {
    if (!selectedPromotionPiece || !selectedNewTile) return;
    const updatedBoard = board.map(tile => toKey(tile.position) === toKey(selectedNewTile.position) 
      ? { position: selectedNewTile.position, piece: selectedPromotionPiece }
      : tile
    );

    setBoard(updatedBoard);

    setSelectedTile(null);
    setSelectedNewTile(null);
    setTurn(turn === "white" ? "black" : "white");
  }

  const movePiece = (newTile: Tile, isCastlingMove: boolean): void => {
    if (!selectedTile) return;

    const oldTile = selectedTile;
    const side = oldTile.piece!.side;

    const oldPosition = toKey(oldTile.position);
    const currentPosition = toKey(newTile.position);

    const pieceType = oldTile.piece!.type;
    const isOldTileLeftRook = oldTile.position.x.value === 1;
    const isNewTileLeftRook = newTile.position.x.value === 1;

    const isPromotingPawn = selectedTile.piece?.type === "pawn" && (newTile.position.y.value === 1 || newTile.position.y.value === 8);

    const isEnPassantMove = !!(board.find(tile => tile.piece?.side !== oldTile.piece!.side && tile.position.x.value === newTile.position.x.value && tile.position.y.value === (side === "black" ? newTile.position.y.value + 1 : newTile.position.y.value - 1))?.piece?.canBeEnPassant);

    const updatedTile = isCastlingMove ? {
      position: pieceType === "king"
        ? { x: { value: isNewTileLeftRook ? 3 : 7 }, y: { value: oldTile.position.y.value } }
        : { x: { value: isOldTileLeftRook ? 4 : 6 }, y: { value: oldTile.position.y.value } },
      piece: { ...selectedTile.piece!, hasEverMoved: true }
    } : {
      ...newTile,
      piece: { ...selectedTile.piece!, hasEverMoved: true }
    };

    if (pieceType === "pawn") {
      const side = oldTile.piece!.side;

      if (side === "black") {
        if (oldTile.position.y.value - newTile.position.y.value === 2) updatedTile.piece.canBeEnPassant = true;
        else updatedTile.piece.canBeEnPassant = false;

        if (newTile.position.y.value === 1) {
          setIsPromoting(true);
        }
      } else {
        if (newTile.position.y.value - oldTile.position.y.value === 2) updatedTile.piece.canBeEnPassant = true;
        else updatedTile.piece.canBeEnPassant = false;

        if (newTile.position.y.value === 8) {
          setIsPromoting(true);
        }
      }
    }

    if (newTile?.piece && !isCastlingMove) {
      setLostPieces([...lostPieces, newTile.piece]);
    }
    if (isEnPassantMove) {
      const enPassantTile = board.find(tile => tile.position.x.value === newTile.position.x.value && tile.position.y.value === (side === "black" ? newTile.position.y.value + 1 : newTile.position.y.value - 1));
      setLostPieces([...lostPieces, enPassantTile!.piece!]);
    }

    delete oldTile.piece;

    if (isCastlingMove) {
      const updatedBoard = board.map(tile => toKey(tile.position) === toKey(updatedTile.position) ? updatedTile : tile);
      const removeOldTileBoard = updatedBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

      const leftRookTile = board.find(tile => tile.position.x.value === 1 && tile.position.y.value === oldTile.position.y.value);
      const rightRookTile = board.find(tile => tile.position.x.value === 8 && tile.position.y.value === oldTile.position.y.value);
      const kingTile = board.find(tile => tile.position.x.value === 5 && tile.position.y.value === oldTile.position.y.value);

      const secondTileToUpdate = pieceType === "king" ? {
        position: { x: { value: isNewTileLeftRook ? 4 : 6 }, y: { value: newTile.position.y.value } },
        piece: isNewTileLeftRook ? leftRookTile?.piece : rightRookTile?.piece
      } : {
        position: { x: { value: isOldTileLeftRook ? 3 : 7 }, y: { value: newTile.position.y.value } },
        piece: kingTile?.piece
      };

      delete newTile.piece;
      const removeNewTileBoard = removeOldTileBoard.map((tile: Tile) => toKey(tile.position) === currentPosition ? newTile : tile);
      const addNewTileBoard = removeNewTileBoard.map((tile: Tile) => toKey(tile.position) === toKey(secondTileToUpdate.position) ? secondTileToUpdate : tile);
      setBoard(addNewTileBoard);
    } else if (isEnPassantMove) {
      const enPassantTile = board.find(tile => tile.piece?.side !== side && tile.position.x.value === newTile.position.x.value && tile.position.y.value === (side === "black" ? newTile.position.y.value + 1 : newTile.position.y.value - 1));

      const updatePieceBoard = board.map((tile: Tile) => toKey(tile.position) === currentPosition ? updatedTile : tile);
      const removeOldPieceBoard = updatePieceBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

      delete enPassantTile?.piece;

      const removeEnPassantTileBoard = removeOldPieceBoard.map((tile: Tile) => toKey(tile.position) === toKey(enPassantTile!.position) ? enPassantTile! : tile);

      setBoard(removeEnPassantTileBoard);
    } else {
      const updatedBoard = board.map((tile: Tile) => toKey(tile.position) === currentPosition ? updatedTile : tile);
      const updatedBoardFinal = updatedBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

      setBoard(updatedBoardFinal);
    }

    console.log("Is promoting: ", isPromoting);

    if (!isPromotingPawn) {
      setSelectedTile(null);
      setSelectedNewTile(null);
      setTurn(turn === "white" ? "black" : "white");
    }
  }

  const onTileClick = (tile: Tile): void => {
    const piece = tile.piece ?? null;
    const position = tile.position;

    if (!selectedTile && !piece) return;

    const allowedKeys = new Set(allowedMoves.map(toKey));

    const isCastlingMove = selectedTile && selectedTile.piece && tile.piece ? selectedTile.piece.side === tile.piece.side : false;

    if (selectedTile && allowedKeys.has(toKey(position))) return movePiece(tile, isCastlingMove);

    if (piece && piece.side === turn) return selectTile(tile);
  }

  useEffect(() => {
    if (!selectedTile) return setAllowedMoves([]);;
    const calculatedAllowedMoves = calculateAllowedMoves(selectedTile, board);
    setAllowedMoves(calculatedAllowedMoves);
  }, [selectedTile]);

  useEffect(() => {
    if (selectedNewTile) onTileClick(selectedNewTile);
  }, [selectedNewTile]);

  useEffect(() => {
    if (selectedPromotionPiece) promotePawn(turn);
  }, [selectedPromotionPiece]);

  return (
    <div className={"grid grid-cols-8 w-fit overflow-hidden"}>
      {board.map((tile: Tile, index: number) => {
        const isBlackTile = (tile.position.x.value % 2 === 0 && tile.position.y.value % 2 === 0) || (tile.position.x.value % 2 !== 0 && tile.position.y.value % 2 !== 0);
        const piece = tile?.piece ?? null;

        const isPromotingPawn = piece && piece.type === "pawn" && (tile.position.y.value === 1 || tile.position.y.value === 8);

        const isSelected = piece && selectedTile === tile;

        const allowedKeys = new Set(allowedMoves.map(toKey));
        const isAllowedMove = allowedKeys.has(toKey(tile.position));

        return (
          <div
            key={index}
            onClick={() => setSelectedNewTile(tile)}
            className={`
              flex items-center justify-center w-24 h-24 border border-foreground col-span-1 row-span-1
              ${isBlackTile && !isAllowedMove ? "bg-foreground text-background" : ""}
              ${isSelected ? 'border-green-500 shadow shadow-green-500' : ''}
              ${selectedTile && !isPromotingPawn && isAllowedMove && !piece ? "bg-green-500" : ""}
              ${selectedTile && !isPromotingPawn && isAllowedMove && piece && piece.side !== selectedTile.piece?.side ? "bg-red-500" : ""}
              ${selectedTile && !isPromotingPawn && isAllowedMove && piece && piece.side === selectedTile.piece?.side ? "bg-orange-500" : ""}
            `}
          >
            {piece && (
              <Image src={piece.imageUrl} alt={piece.type + piece.side} width={45} height={45}></Image>
            )}
          </div>
        )
      })}
    </div>
  )
}