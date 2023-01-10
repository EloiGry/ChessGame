import { BishopMove } from "../Bishop/BishopMove";
import { RookMove } from "../Rock/RookMove";

export async function QueenMove(position: string, direction: string) {
    await BishopMove(position, direction)
    await RookMove(position, direction)
}