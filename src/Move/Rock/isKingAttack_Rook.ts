import { RookProperty } from "./RookProperty"
import { PieceTheme } from "../../PieceTheme"

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

    export async function IsKingAttack_W_Rook (king: string) {
        let arrayMove : string[] = []
        const filter = PieceTheme.filter(element => (element.name).includes('rookWhite') || (element.name).includes('queenWhite'))
    
        for (const element of filter) {
            const array = await RookProperty(element.position)
            arrayMove = arrayMove.concat(array)
          }
        
        const find: Object | undefined = PieceTheme.find(element => element.name === king)
        
    
        if (find) {
            if (arrayMove.includes(find.position)) {
                return true 
            }
        } 
    }

    export async function IsKingAttack_B_Rook (king: string) {
        let arrayMove : string[] = []
        const filter = PieceTheme.filter(element => (element.name).includes('rookBlack') || (element.name).includes('queenBlack'))
    
        for (const element of filter) {
            const array = await RookProperty(element.position)
            arrayMove = arrayMove.concat(array)
          }
        
        const find: Object | undefined = PieceTheme.find(element => element.name === king)

        if (find) {
            if (arrayMove.includes(find.position)) {
                return true  
            }
        } 
    }