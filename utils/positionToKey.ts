import { Position } from "./Board";

export const toKey = (position: Position | null): string => {
  return position ? `${position.x.value}, ${position.y.value}` : "";
};