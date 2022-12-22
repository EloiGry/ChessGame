import { BishopMove } from "./BishopMove";
import { KingMove } from "./KingMove";
import { KnightMove } from "./KnightMove";
import { PawnMove_W } from "./PawnMove";
import { QueenMove } from "./QueenMove";
import { RookMove } from "./RookMove";

export async function MovePiecesWhite(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnWhite': PawnMove_W(position, direction)
            break;
        case 'knightWhite': KnightMove(position, direction)
            break;
        case 'bishopWhite': BishopMove(position, direction)
            break;
        case 'rookWhite': RookMove(position, direction)
            break;
        case 'queenWhite': QueenMove(position, direction)
            break;
        case 'kingWhite': KingMove(position, direction)
            break;
        default:
            break;
    }
}

