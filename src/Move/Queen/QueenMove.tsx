import { BishopMove } from "../Bishop/BishopMove";
import { RookMove } from "../Rock/RookMove";

export async function QueenMove(position: string, direction: string) {
    BishopMove(position, direction)
    RookMove(position, direction)
}