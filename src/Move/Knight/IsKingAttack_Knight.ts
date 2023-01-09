import { PieceTheme } from "../../PieceTheme";
import { KnightProperty } from "./KnightProperty";

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function isKingAttack_B_Knight(king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('knightBlack'))

    for (const element of filter) {
        const position = await KnightProperty(element.position)
        arrayMove.push(position.newPosition_1, position.newPosition_2, position.newPosition_3, position.newPosition_4, position.newPosition_5, position.newPosition_6, position.newPosition_7, position.newPosition_8)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            return true  
        }
    } 
}

export async function isKingAttack_W_Knight(king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('knightWhite'))

    for (const element of filter) {
        const position = await KnightProperty(element.position)
        arrayMove.push(position.newPosition_1, position.newPosition_2, position.newPosition_3, position.newPosition_4, position.newPosition_5, position.newPosition_6, position.newPosition_7, position.newPosition_8)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            return true 
        }
    } 
}

