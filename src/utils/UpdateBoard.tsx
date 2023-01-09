import { PieceTheme } from "../PieceTheme";
import { isKing_B_Attack, isKing_W_Attack } from "../Move/isKingAttack";

const Update = async (element1 : string, element2 : string) => {
  
    const deletePiece : number = PieceTheme.findIndex(element => element.position === element2)
    const update : number = PieceTheme.findIndex(element => element.position === element1)

        if (deletePiece !== -1) {
            if (PieceTheme[update].color !== PieceTheme[deletePiece].color) {
                PieceTheme[update].position = element2
                PieceTheme.splice(deletePiece, 1)
            }
            else {
                return null
            }
        } else {
            PieceTheme[update].position = element2
            if (PieceTheme[update].color === 'black' && await isKing_B_Attack('kingBlack')) {
                console.log('Im in');
                 PieceTheme[update].position = element1   
            }
            if (PieceTheme[update].color === 'white' && await isKing_W_Attack('kingWhite')) {
                console.log('Im in 2');
                 PieceTheme[update].position = element1   
            }
        }

}
export default Update

