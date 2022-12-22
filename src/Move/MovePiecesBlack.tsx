import { PawnMove_B } from "./PawnMove";
import { KnightMove } from "./KnightMove";
import { BishopMove } from "./BishopMove";
import { RookMove } from "./RookMove";
import { QueenMove } from "./QueenMove";

export async function MovePiecesBlack(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnBlack': PawnMove_B(position, direction)
            break;
        case 'knightBlack': KnightMove(position, direction)
            break;
        case 'bishopBlack': BishopMove(position, direction)
            break;
        case 'rookBlack': RookMove(position, direction)
            break;
        case 'queenBlack': QueenMove(position, direction)
            break;
        default:
            break;
    }
}