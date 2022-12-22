import { BishopMove } from "./BishopMove";
import { RookMove } from "./RookMove";

export async function QueenMove(position: string, direction: string) {
BishopMove(position, direction)
RookMove(position, direction)
}