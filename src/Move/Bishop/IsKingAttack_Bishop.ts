import { BishopProperty } from "./BishopProperty"
import { PieceTheme } from "../../PieceTheme"

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function IsKingAttack_Bishop (newPosition: string, king: string) {
    const arrayMove = await BishopProperty(newPosition)

    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            console.log('king has to move');  
        }
    } 
}