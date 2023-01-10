import { PieceTheme } from "../PieceTheme";
import { isKing_B_Attack, isKing_W_Attack } from "../Move/isKingAttack";
import pop from '../assets/sounds/pop.wav'

const Update = async (element1 : string, element2 : string) => {
  
    const deletePiece : number = PieceTheme.findIndex(element => element.position === element2)
    const update : number = PieceTheme.findIndex(element => element.position === element1)

        if (deletePiece !== -1) {
            if (PieceTheme[update].color !== PieceTheme[deletePiece].color) {
                PieceTheme[update].position = element2
                if (PieceTheme[update].color === 'black' && await isKing_B_Attack('kingBlack')) {
                    const filter = PieceTheme.filter(element => element.position === element2) 
                    if (filter) {
                        PieceTheme.splice(deletePiece, 1)
                        new Audio(pop).play()
                    } else {
                        PieceTheme[update].position = element1   
                        console.log('aca stoy');
                    }
                    
                } else if (PieceTheme[update].color === 'white' && await isKing_W_Attack('kingWhite')) {
                    const filter = PieceTheme.filter(element => element.position === element2) 
                    if (filter) {
                        PieceTheme.splice(deletePiece, 1)
                        new Audio(pop).play()
                    } else {
                        PieceTheme[update].position = element1   
                        console.log('aqui stoy');
                    }  
                } else {
                    PieceTheme.splice(deletePiece, 1)
                    new Audio(pop).play()
                }     
            }
            else {
                return null
            }
        } else {
            PieceTheme[update].position = element2
            if (await isKing_B_Attack('kingBlack') && PieceTheme[update].color === 'black') {
                PieceTheme[update].position = element1  
                console.log('attack')
            }
            else if (await isKing_W_Attack('kingWhite') && PieceTheme[update].color === 'white') {
                PieceTheme[update].position = element1  
                console.log('attackW')
            } else {
                new Audio(pop).play()
            }
        }

}
export default Update

