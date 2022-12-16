import { PawnMove_B } from "./PawnMove";
import { KnightMove } from "./KnightMove";

export async function MovePiecesBlack (name : string | undefined, position : string, direction : string) {
    switch (name) {
        case 'pawnBlack': PawnMove_B(position, direction)
            break;
        case 'knightBlack': KnightMove(position, direction)
            break;
    
        default:
            break;
    }
}