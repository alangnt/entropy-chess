import LostPiecesComponent from "@/components/LostPieces";
import { Board, initialBoard, Position, Tile } from "@/utils/Board";
import { calculateAllowedMoves } from "@/utils/calculateAllowedMoves";
import { Piece, Side } from "@/utils/Pieces";
import { toKey } from "@/utils/positionToKey";
import { useEffect, useState } from "react";
import Image from "next/image";

type BoardProps = {
  turn: Side;
  setTurn: (value: Side) => void;
  lostPieces: Piece[];
  setLostPieces: (value: Piece[]) => void;
}

export default function BoardComponent({ turn, setTurn, lostPieces, setLostPieces }: BoardProps) {
  const [board, setBoard] = useState<Board>(initialBoard);

  const [selectedTile, setSelectedTile] = useState<Tile | null>();
  const [allowedMoves, setAllowedMoves] = useState<Position[]>([]);

  const selectTile = (tile: Tile): void => {
    if (selectedTile === tile) return setSelectedTile(null);
    setSelectedTile(tile);
  }

  const movePiece = (newTile: Tile, isCastlingMove: boolean): void => {
    if (!selectedTile) return;

    const oldTile = selectedTile;

    const oldPosition = toKey(oldTile.position);
    const currentPosition = toKey(newTile.position);

    const pieceType = oldTile.piece!.type;
    const isOldTileLeftRook = oldTile.position.x.value === 1;
    const isNewTileLeftRook = newTile.position.x.value === 1;

    const updatedTile = isCastlingMove ? {
      position: pieceType === "king"
        ? { x: { value: isOldTileLeftRook ? 2 : 8 }, y: { value: oldTile.position.y.value } }
        : { x: { value: isNewTileLeftRook ? 3 : 5 }, y: { value: oldTile.position.y.value } },
      piece: { ...selectedTile.piece!, hasEverMoved: true }
    } : {
      ...newTile,
      piece: { ...selectedTile.piece!, hasEverMoved: true }
    };

    if (newTile?.piece) {
      setLostPieces([...lostPieces, newTile.piece]);
    }

    delete oldTile.piece;

    if (isCastlingMove) {
      const updatedBoard = board.map(tile => toKey(tile.position) === toKey(updatedTile.position) ? updatedTile : tile);
      const removeOldTileBoard = updatedBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

      const leftRookTile = board.find(tile => tile.position.x.value === 1 && tile.position.y.value === oldTile.position.y.value);
      const rightRookTile = board.find(tile => tile.position.x.value === 8 && tile.position.y.value === oldTile.position.y.value);
      const kingTile = board.find(tile => tile.position.x.value === 4 && tile.position.y.value === oldTile.position.y.value);

      const secondTileToUpdate = pieceType === "king" ? {
        position: { x: { value: isNewTileLeftRook ? 3 : 5 }, y: { value: newTile.position.y.value } },
        piece: isNewTileLeftRook ? leftRookTile?.piece : rightRookTile?.piece
      } : {
        position: { x: { value: isOldTileLeftRook ? 2 : 8 }, y: { value: newTile.position.y.value } },
        piece: kingTile?.piece
      };

      delete newTile.piece;
      const removeNewTileBoard = removeOldTileBoard.map((tile: Tile) => toKey(tile.position) === currentPosition ? newTile : tile);
      const addNewTileBoard = removeNewTileBoard.map((tile: Tile) => toKey(tile.position) === toKey(secondTileToUpdate.position) ? secondTileToUpdate : tile);
      setBoard(addNewTileBoard);
    } else {
      const updatedBoard = board.map((tile: Tile) => toKey(tile.position) === currentPosition ? updatedTile : tile);
      const updatedBoardFinal = updatedBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

      setBoard(updatedBoardFinal);
    }

    setSelectedTile(null);
    setTurn(turn === "white" ? "black" : "white");
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
    console.log(lostPieces);
  }, [lostPieces]);

  useEffect(() => {
    console.log(allowedMoves);
  }, [allowedMoves]);

  return (
    <div className={"grid grid-cols-8 w-fit overflow-hidden"}>
      {board.map((tile: Tile, index: number) => {
        const isBlackTile = (tile.position.x.value % 2 === 0 && tile.position.y.value % 2 === 0) || (tile.position.x.value % 2 !== 0 && tile.position.y.value % 2 !== 0);
        const piece = tile?.piece ?? null;
        const isSelected = piece && selectedTile === tile;

        const allowedKeys = new Set(allowedMoves.map(toKey));
        const isAllowedMove = allowedKeys.has(toKey(tile.position));

        return (
          <div
            key={index}
            onClick={() => onTileClick(tile)}
            className={`
              flex items-center justify-center w-24 h-24 border border-foreground col-span-1 row-span-1
              ${isBlackTile && !isAllowedMove ? "bg-foreground text-background" : ""}
              ${isSelected ? 'border-green-500 shadow shadow-green-500' : ''}
              ${selectedTile && isAllowedMove && !piece ? "bg-green-500" : ""}
              ${selectedTile && isAllowedMove && piece && piece.side !== selectedTile.piece!.side ? "bg-red-500" : ""}
              ${selectedTile && isAllowedMove && piece && piece.side === selectedTile.piece!.side ? "bg-orange-500" : ""}
            `}
          >
            {piece && (
              <Image src={piece.imageUrl} alt={piece.name + piece.side} width={45} height={45}></Image>
            )}
          </div>
        )
      })}
    </div>
  )
}