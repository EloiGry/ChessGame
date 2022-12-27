import { PawnMove_B } from "./PawnMove";
import { KnightMove } from "./Knight/KnightMove";
import { BishopMove } from "./Bishop/BishopMove";
import { RookMove } from "./Rock/RookMove";
import { QueenMove } from "./Queen/QueenMove";
import { KingMove } from "./KingMove";
import { isKingAttack_Knight } from "./Knight/IsKingAttack_Knight";
import { IsKingAttack_Bishop } from "./Bishop/IsKingAttack_Bishop";
import { IsKingAttack_Rook } from "./Rock/isKingAttack_Rook";
import { isKingAttack_Queen } from "./Queen/isKingAttack_Queen";

export async function MovePiecesBlack(name: string | undefined, position: string, direction: string) {
    switch (name) {
        case 'pawnBlack': PawnMove_B(position, direction)
            break;
        case 'knightBlack':
            await KnightMove(position, direction)
            await isKingAttack_Knight(direction, 'kingWhite')
            break;
        case 'bishopBlack':
            await BishopMove(position, direction)
            await IsKingAttack_Bishop(direction, 'kingWhite')
            break;
        case 'rookBlack': 
            await RookMove(position, direction)
            await IsKingAttack_Rook(direction, 'kingWhite')
            break;
        case 'queenBlack': 
            await QueenMove(position, direction)
            await isKingAttack_Queen(direction, 'kingWhite')
            break;
        case 'kingBlack': KingMove(position, direction)
            break;
        default:
            break;
    }
}