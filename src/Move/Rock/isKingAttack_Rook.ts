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
        const filter = PieceTheme.filter(element => (element.name).includes('rookWhite'))
    
        for (const element of filter) {
            const array = await RookProperty(element.position)
            arrayMove = arrayMove.concat(array)
          }
        
        const find: Object | undefined = PieceTheme.find(element => element.name === king)

        console.log("arrayMove",arrayMove);
        
    
        if (find && arrayMove.length > 0) {
            if (arrayMove.includes(find.position)) {
                console.log('king has to move');  
            }
        } 
    }

    export async function IsKingAttack_B_Rook (king: string) {
        let arrayMove : string[] = []
        const filter = PieceTheme.filter(element => (element.name).includes('rookBlack'))
    
        for (const element of filter) {
            const array = await RookProperty(element.position)
            arrayMove = arrayMove.concat(array)
          }
        
        const find: Object | undefined = PieceTheme.find(element => element.name === king)
        console.log("arrayMove",arrayMove);
        if (find && arrayMove.length > 0) {
            if (arrayMove.includes(find.position)) {
                console.log('KING HAS TO MOVE');  
            }
        } 
    }