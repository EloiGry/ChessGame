export async function KingProperty (position : string) {
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
    return {newPosition_1, newPosition_2, newPosition_3, newPosition_4, newPosition_5, newPosition_6, newPosition_7, newPosition_8}
}