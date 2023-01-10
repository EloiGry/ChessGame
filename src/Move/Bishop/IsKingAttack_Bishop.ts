import { PieceTheme } from "../../PieceTheme"
import { BishopProperty } from "./BishopProperty"

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function IsKingAttack_W_Bishop (king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('queenWhite') || (element.name).includes('bishopWhite'))
    console.log(filter, 'attackWK');
    for (const element of filter) {
        const array = await BishopProperty(element.position)
        arrayMove = arrayMove.concat(array)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find) {
        if (arrayMove.includes(find.position)) {
            return true   
        }
    } 
}

export async function IsKingAttack_B_Bishop (king: string) {

    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('queenBlack') || (element.name).includes('bishopBlack'))
    console.log(filter, 'attackBlackK');
    

    for (const element of filter) {
        const array = await BishopProperty(element.position)
        arrayMove = arrayMove.concat(array)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)
    if (find) {
        if (arrayMove.includes(find.position)) {
            return true 
        }
    } 
}