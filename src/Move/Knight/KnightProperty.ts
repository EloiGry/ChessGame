export async function KnightProperty (position : string) {
    const split: string[] = position.split("")
    const charCode_1: number = split[0].charCodeAt(0) + 1
    const charCode_2: number = split[0].charCodeAt(0) + 2
    const charCode_3: number = split[0].charCodeAt(0) - 1
    const charCode_4: number = split[0].charCodeAt(0) - 2
    const newPosition_1: string = `${String.fromCharCode(charCode_1)}${(Number(split[1]) - 2).toString()}`
    const newPosition_2: string = `${String.fromCharCode(charCode_1)}${(Number(split[1]) + 2).toString()}`
    const newPosition_3: string = `${String.fromCharCode(charCode_2)}${(Number(split[1]) - 1).toString()}`
    const newPosition_4: string = `${String.fromCharCode(charCode_2)}${(Number(split[1]) + 1).toString()}`
    const newPosition_5: string = `${String.fromCharCode(charCode_3)}${(Number(split[1]) + 2).toString()}`
    const newPosition_6: string = `${String.fromCharCode(charCode_3)}${(Number(split[1]) - 2).toString()}`
    const newPosition_7: string = `${String.fromCharCode(charCode_4)}${(Number(split[1]) + 1).toString()}`
    const newPosition_8: string = `${String.fromCharCode(charCode_4)}${(Number(split[1]) - 1).toString()}`
    return {newPosition_1, newPosition_2, newPosition_3, newPosition_4, newPosition_5, newPosition_6, newPosition_7, newPosition_8}
}