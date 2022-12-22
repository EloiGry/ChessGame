import Update from "../utils/UpdateBoard"

export async function KingMove (position : string, direction : string) {
    const split: string[] = position.split("")
    const charCode: string = String.fromCharCode(split[0].charCodeAt(0))
    const charCode_1: string = String.fromCharCode(split[0].charCodeAt(0) + 1)
    const charCode_2: string = String.fromCharCode(split[0].charCodeAt(0) - 1)
    const num: string = (Number(split[1])).toString()
    const num_1: string = (Number(split[1]) + 1).toString()
    const num_2: string = (Number(split[1]) - 1).toString()
    const newPosition_1: string = `${charCode}${num_1}`
    const newPosition_2: string = `${charCode_1}${num_1}`
    const newPosition_3: string = `${charCode_1}${num}`
    const newPosition_4: string = `${charCode_1}${num_2}`
    const newPosition_5: string = `${charCode}${num_2}`
    const newPosition_6: string = `${charCode_2}${num_2}`
    const newPosition_7: string = `${charCode_2}${num}`
    const newPosition_8: string = `${charCode_2}${num_1}`


    if (newPosition_1 === direction || newPosition_2 === direction || newPosition_3 === direction || newPosition_4 === direction || newPosition_5 === direction || newPosition_6 === direction || newPosition_7 === direction || newPosition_8 === direction) {
        await Update(position, direction)
    }
}