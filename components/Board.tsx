import { Board, initialBoard, Position, Tile } from "@/utils/Board";
import { calculateAllowedMoves } from "@/utils/calculateAllowedMoves";
import { Piece } from "@/utils/Pieces";
import { toKey } from "@/utils/positionToKey";
import { useEffect, useState } from "react";

export default function BoardComponent({ lostPieces, setLostPieces }: { lostPieces: Piece[], setLostPieces: (value: Piece[]) => void }) {
  const [board, setBoard] = useState<Board>(initialBoard);

  const [selectedTile, setSelectedTile] = useState<Tile | null>();
  const [allowedMoves, setAllowedMoves] = useState<Position[]>([]);

  const selectTile = (tile: Tile): void => {
    if (selectedTile === tile) return setSelectedTile(null);
    setSelectedTile(tile);
  }

  const movePiece = (newTile: Tile): void => {
    if (!selectedTile) return;

    const oldTile = selectedTile;

    const oldPosition = toKey(oldTile.position);
    const currentPosition = toKey(newTile.position);

    const updatedTile = {
      ...newTile,
      currentPiece: selectedTile.currentPiece
    };

    if (newTile?.currentPiece) {
      setLostPieces([...lostPieces, newTile.currentPiece]);
    }

    delete oldTile.currentPiece;

    const updatedBoard = board.map((tile: Tile) => toKey(tile.position) === currentPosition ? updatedTile : tile);
    const updatedBoardFinal = updatedBoard.map((tile: Tile) => toKey(tile.position) === oldPosition ? oldTile : tile);

    setBoard(updatedBoardFinal);
    setSelectedTile(null);
  }

  const onTileClick = (tile: Tile): void => {
    const piece = tile.currentPiece ?? null;
    const position = tile.position;

    if (!selectedTile && !piece) return;

    const allowedKeys = new Set(allowedMoves.map(toKey));

    const isUnallowedSide = selectedTile && selectedTile.currentPiece && tile.currentPiece ? selectedTile.currentPiece.side === tile.currentPiece.side : false;

    if (selectedTile && allowedKeys.has(toKey(position)) && !isUnallowedSide) return movePiece(tile);

    if (piece) return selectTile(tile);
  }

  useEffect(() => {
    if (!selectedTile) return setAllowedMoves([]);;
    const calculatedAllowedMoves = calculateAllowedMoves(selectedTile, board);
    setAllowedMoves(calculatedAllowedMoves);
  }, [selectedTile]);

  useEffect(() => {
    console.log(lostPieces);
  }, [lostPieces]);

  return (
    <div className={"grid grid-cols-8 w-fit overflow-hidden"}>
      {board.map((tile: Tile, index: number) => {
        const isBlackTile = (tile.position.x.value % 2 === 0 && tile.position.y.value % 2 === 0) || (tile.position.x.value % 2 !== 0 && tile.position.y.value % 2 !== 0);
        const piece = tile?.currentPiece ?? null;
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
              ${selectedTile && isAllowedMove && piece && piece.side !== selectedTile.currentPiece!.side ? "bg-red-500" : ""}
            `}
          >
            <p>{piece?.name}</p>
          </div>
        )
      })}
    </div>
  )
}