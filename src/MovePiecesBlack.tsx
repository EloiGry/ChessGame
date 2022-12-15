import { PawnMove_B } from "./PawnMove";

export async function MovePiecesBlack (name : string | undefined, position : string, direction : string) {
    switch (name) {
        case 'pawnBlack': PawnMove_B(position, direction)

        break;
    
        default:
            break;
    }
}