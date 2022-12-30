import { PawnProperty_W, PawnProperty_B } from "./PawnProperty"
import { PieceTheme } from "../../PieceTheme"

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function IsKingAttack_W_Pawn (king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('pawnWhite'))

    for (const element of filter) {
        const position = await PawnProperty_W(element.position)
        arrayMove.push(position.newPositionTer, position.newPositionQ)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find && arrayMove.length > 0) {
        if (arrayMove.includes(find.position)) {
            console.log('king has to move');  
        }
    } 
}

export async function IsKingAttack_B_Pawn (king: string) {
    let arrayMove : string[] = []
    const filter = PieceTheme.filter(element => (element.name).includes('pawnBlack'))

    for (const element of filter) {
        const position = await PawnProperty_B(element.position)
        arrayMove.push(position.newPositionTer, position.newPositionQ)
      }
    
    const find: Object | undefined = PieceTheme.find(element => element.name === king)

    if (find && arrayMove.length > 0) {
        if (arrayMove.includes(find.position)) {
            console.log('king has to move');  
        }
    } 
}