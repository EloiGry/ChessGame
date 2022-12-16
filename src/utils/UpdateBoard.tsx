import { PieceTheme } from "../PieceTheme";

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
        }

}

export default Update;
