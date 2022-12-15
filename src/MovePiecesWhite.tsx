import { PawnMove_W } from "./PawnMove";

export async function MovePiecesWhite (name : string | undefined, position : string, direction : string) {
    switch (name) {
        case 'pawnWhite': PawnMove_W(position, direction)

            break;
    
        default:
            break;
    }
}

