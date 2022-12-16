import { PieceTheme } from "./PieceTheme"
import Update from "./utils/UpdateBoard"

export async function BishopMove(position : string, direction : string) {

    const split : string[] = position.split("")
    let arrayMove : string[] = []
    let element : number = 1
    const charCode_1 : number = split[0].charCodeAt(0) + element
    const charCode_2 : number = split[0].charCodeAt(0) - element
    const num_1 : number = Number(split[1]) + element
    const num_2 : number = Number(split[1]) - element

    let find_1 : object | undefined = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_1)}${(num_1).toString()}`)
    let find_2 : object | undefined = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_1)}${(num_2).toString()}`)
    let find_3 : object | undefined = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_2)}${(num_1).toString()}`)
    let find_4 : object | undefined = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_2)}${(num_2).toString()}`)
    
    while (typeof find_1 === 'undefined' && typeof find_2 === 'undefined' && typeof find_3 === 'undefined' && typeof find_4 === 'undefined') {
        if (typeof find_1 === 'undefined') {
           arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_1).toString()}`)
           element ++ 
       }
       element = 0
       if (typeof find_2 === 'undefined') {
           arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_2).toString()}`)
           element ++
       }
       element = 0
       if (typeof find_3 === 'undefined') {
           arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_1).toString()}`)
           element ++
       }
       element = 0
       if (typeof find_4 === 'undefined') {
           arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_2).toString()}`)
           element ++
       }

    }

         
    console.log("bishopArray",arrayMove);

    if (arrayMove.includes(direction)) {
        Update(position, direction)
    }

}