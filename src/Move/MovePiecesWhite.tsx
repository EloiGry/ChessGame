import { BishopMove } from "./Bishop/BishopMove";
import { KingMove } from "./KingMove";
import { KnightMove } from "./Knight/KnightMove";
import { PawnMove_W } from "./Pawn/PawnMove";
import { QueenMove } from "./Queen/QueenMove";
import { RookMove } from "./Rock/RookMove";
import { isKingAttack } from "./isKingAttack";

export async function MovePiecesWhite(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnWhite': 
            await PawnMove_W(position, direction)
            await isKingAttack('kingBlack')
            await isKingAttack('kingWhite')
            break;
        case 'knightWhite':
            await KnightMove(position, direction)
            await isKingAttack('kingBlack')
            await isKingAttack('kingWhite')
            break;
        case 'bishopWhite':
            await BishopMove(position, direction)
            await isKingAttack('kingBlack')
            await isKingAttack('kingWhite')
            break;
        case 'rookWhite':
            await RookMove(position, direction)
            await isKingAttack('kingBlack')
            await isKingAttack('kingWhite')
            break;
        case 'queenWhite':
            await QueenMove(position, direction)
            await isKingAttack('kingBlack')
            await isKingAttack('kingWhite')
            break;
        case 'kingWhite': KingMove(position, direction)
            break;
        default:
            break;
    }
}

