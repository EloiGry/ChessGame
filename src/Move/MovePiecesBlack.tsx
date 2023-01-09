import { PawnMove_B } from "./Pawn/PawnMove";
import { KnightMove } from "./Knight/KnightMove";
import { BishopMove } from "./Bishop/BishopMove";
import { RookMove } from "./Rock/RookMove";
import { QueenMove } from "./Queen/QueenMove";
import { KingMove } from "./KingMove";



export async function MovePiecesBlack(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnBlack': 
            await PawnMove_B(position, direction)
            break;
        case 'knightBlack':
            await KnightMove(position, direction)
            break;
        case 'bishopBlack':
            await BishopMove(position, direction)
            break;
        case 'rookBlack':
            await RookMove(position, direction)
            break;
        case 'queenBlack':
            await QueenMove(position, direction)
            break;
        case 'kingBlack': KingMove(position, direction)
            break;
        default:
            break;
    }
}