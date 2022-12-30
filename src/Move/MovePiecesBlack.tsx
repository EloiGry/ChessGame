import { PawnMove_B } from "./Pawn/PawnMove";
import { KnightMove } from "./Knight/KnightMove";
import { BishopMove } from "./Bishop/BishopMove";
import { RookMove } from "./Rock/RookMove";
import { QueenMove } from "./Queen/QueenMove";
import { KingMove } from "./KingMove";
import { isKingAttack } from "./isKingAttack";

export async function MovePiecesBlack(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnBlack': 
            await PawnMove_B(position, direction)
            await isKingAttack('kingWhite')
            await isKingAttack('kingBlack')
            break;
        case 'knightBlack':
            await KnightMove(position, direction)
            await isKingAttack('kingWhite')
            await isKingAttack('kingBlack')
            break;
        case 'bishopBlack':
            await BishopMove(position, direction)
            await isKingAttack('kingWhite')
            await isKingAttack('kingBlack')
            break;
        case 'rookBlack':
            await RookMove(position, direction)
            await isKingAttack('kingWhite')
            await isKingAttack('kingBlack')
            break;
        case 'queenBlack':
            await QueenMove(position, direction)
            await isKingAttack('kingWhite')
            await isKingAttack('kingBlack')
            break;
        case 'kingBlack': KingMove(position, direction)
            break;
        default:
            break;
    }
}