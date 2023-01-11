import { BishopMove } from "./Bishop/BishopMove";
import { KingMove } from "./King/KingMove";
import { KnightMove } from "./Knight/KnightMove";
import { PawnMove_W } from "./Pawn/PawnMove";
import { QueenMove } from "./Queen/QueenMove";
import { RookMove } from "./Rock/RookMove";

export async function MovePiecesWhite(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnWhite':
            await PawnMove_W(position, direction)
            break;
        case 'knightWhite':
            await KnightMove(position, direction)
            break;
        case 'bishopWhite':
            await BishopMove(position, direction)
            break;
        case 'rookWhite':
            await RookMove(position, direction)
            break;
        case 'queenWhite':
            await QueenMove(position, direction)
            break;
        case 'kingWhite': 
            await KingMove(position, direction)
            break;
        default:
            break;
    }
}

