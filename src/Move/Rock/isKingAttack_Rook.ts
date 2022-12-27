import { RookProperty } from "./RookProperty"
import { PieceTheme } from "../../PieceTheme"

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function IsKingAttack_Rook (newPosition: string, king: string) {
    const arrayMove = await RookProperty(newPosition)

    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            console.log('king has to move');  
        }
    } 
}