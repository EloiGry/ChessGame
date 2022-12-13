import { PieceTheme } from "../PieceTheme";

const Update = async (element1 : string, element2 : string) => {
    
    const update = PieceTheme.findIndex(element => element.position === element1)
    PieceTheme[update].position = element2 
}

export default Update;
