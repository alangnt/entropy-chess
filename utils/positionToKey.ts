import { Position } from "./Board";

export const toKey = (position: Position): string => `${position.x.value}, ${position.y.value}`;