import { PieceTheme } from "../../PieceTheme";
import { KingProperty } from "./KingProperty";

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function isKingAttack_B_King(king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('kingBlack'))

    for (const element of filter) {
        const position = await KingProperty(element.position)
        arrayMove.push(position.newPosition_1, position.newPosition_2, position.newPosition_3, position.newPosition_4, position.newPosition_5, position.newPosition_6, position.newPosition_7, position.newPosition_8)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            return true  
        }
    } 
}

export async function isKingAttack_W_King(king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('kingWhite'))

    for (const element of filter) {
        const position = await KingProperty(element.position)
        arrayMove.push(position.newPosition_1, position.newPosition_2, position.newPosition_3, position.newPosition_4, position.newPosition_5, position.newPosition_6, position.newPosition_7, position.newPosition_8)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            return true 
        }
    } 
}

