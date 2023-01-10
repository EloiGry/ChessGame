import Update from "../../utils/UpdateBoard";
import { PawnProperty_B, PawnProperty_W } from "./PawnProperty";
import { PieceTheme } from "../../PieceTheme";


export async function PawnMove_W(position: string, direction: string) {
    const {newPosition, newPositionBis, newPositionTer, newPositionQ} = await PawnProperty_W(position)
    const [getPieceRight, getPieceLeft] = await getPiecesWithPawn(newPositionTer, newPositionQ)
    

    if (newPosition === direction || newPositionBis === direction || (newPositionTer === direction && getPieceRight) || (newPositionQ === direction && getPieceLeft)) {
        await Update(position, direction)
    }
};

export async function PawnMove_B(position: string, direction: string) {

    const {newPosition, newPositionBis, newPositionTer, newPositionQ} = await PawnProperty_B(position)
    const [getPieceRight, getPieceLeft] = await getPiecesWithPawn(newPositionTer, newPositionQ)

    if (newPosition === direction || newPositionBis === direction || (newPositionTer === direction && getPieceRight) || (newPositionQ === direction && getPieceLeft)) {
        await Update(position, direction)
    }
};

export async function getPiecesWithPawn (positionLeft: string, positionRight: string) {
    const getPieceRight = PieceTheme.find(element => element.position === positionLeft)
    const getPieceLeft = PieceTheme.find(element => element.position === positionRight)
    return [getPieceRight, getPieceLeft] 
}
