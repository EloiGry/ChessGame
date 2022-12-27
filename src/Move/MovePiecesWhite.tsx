import { isKingAttack_Knight } from "./Knight/IsKingAttack_Knight";
import { BishopMove } from "./Bishop/BishopMove";
import { KingMove } from "./KingMove";
import { KnightMove } from "./Knight/KnightMove";
import { PawnMove_W } from "./PawnMove";
import { QueenMove } from "./Queen/QueenMove";
import { RookMove } from "./Rock/RookMove";
import { IsKingAttack_Bishop } from "./Bishop/IsKingAttack_Bishop";
import { IsKingAttack_Rook } from "./Rock/isKingAttack_Rook";
import { isKingAttack_Queen } from "./Queen/isKingAttack_Queen";

export async function MovePiecesWhite(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnWhite': PawnMove_W(position, direction)
            break;
        case 'knightWhite':
            await KnightMove(position, direction)
            await isKingAttack_Knight(direction, 'kingBlack')
            break;
        case 'bishopWhite':
            await BishopMove(position, direction)
            await IsKingAttack_Bishop(direction, 'kingBlack')
            break;
        case 'rookWhite': 
            await RookMove(position, direction)
            await IsKingAttack_Rook(direction, 'kingBlack')
            break;
        case 'queenWhite': 
            await QueenMove(position, direction)
            await isKingAttack_Queen(direction, 'kingBlack')
            break;
        case 'kingWhite': KingMove(position, direction)
            break;
        default:
            break;
    }
}

