import Update from "./utils/UpdateBoard"

export async function KnightMove (position : string, direction : string) {
    const split : string[] = position.split("")
    const charCode_1 : number = split[0].charCodeAt(0) + 1
    const charCode_2 : number = split[0].charCodeAt(0) + 2
    const charCode_3 : number = split[0].charCodeAt(0) - 1
    const charCode_4 : number = split[0].charCodeAt(0) - 2
    const newPosition_1 : string = `${String.fromCharCode(charCode_1)}${(Number(split[1]) - 2).toString()}`
    const newPosition_2 : string = `${String.fromCharCode(charCode_1)}${(Number(split[1]) + 2).toString()}`
    const newPosition_3 : string = `${String.fromCharCode(charCode_2)}${(Number(split[1]) - 1).toString()}`
    const newPosition_4 : string = `${String.fromCharCode(charCode_2)}${(Number(split[1]) + 1).toString()}`
    const newPosition_5 : string = `${String.fromCharCode(charCode_3)}${(Number(split[1]) + 2).toString()}`
    const newPosition_6 : string = `${String.fromCharCode(charCode_3)}${(Number(split[1]) - 2).toString()}`
    const newPosition_7 : string = `${String.fromCharCode(charCode_4)}${(Number(split[1]) + 1).toString()}`
    const newPosition_8 : string = `${String.fromCharCode(charCode_4)}${(Number(split[1]) - 1).toString()}`

    if (newPosition_1 === direction || newPosition_2 === direction || newPosition_3 === direction || newPosition_4 === direction || newPosition_5 === direction || newPosition_6 === direction ||newPosition_7 === direction ||newPosition_8 === direction) {
        await Update(position, direction) 
    }
}