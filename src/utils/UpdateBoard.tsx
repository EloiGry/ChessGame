import { PieceTheme } from "../PieceTheme";

const Update = async (element1 : string, element2 : string) => {

    const deletePiece = PieceTheme.findIndex(element => element.position === element2)
    const update = PieceTheme.findIndex(element => element.position === element1)

        PieceTheme[update].position = element2
        if (deletePiece !== -1) {
            PieceTheme.splice(deletePiece, 1)
        }
        
  
}

export default Update;
