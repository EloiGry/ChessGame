import { PieceTheme } from "../PieceTheme"
import Update from "../utils/UpdateBoard"

export async function RookMove(position: string, direction: string) {

    const split: string[] = position.split("")
    let arrayMove: string[] = []
    let element1: number = 1
    let element2: number = 1
    let element3: number = 1
    let element4: number = 1

    let find_1: object | undefined
    let find_2: object | undefined
    let find_3: object | undefined
    let find_4: object | undefined
    const arrayString: string[] = ['a', 'h']
    const arrayNumber: string[] = ['1', '8']


    while (typeof find_1 !== 'object') {
        const charCode_1: number = split[0].charCodeAt(0) + element1
        const num_1: number = Number(split[1])

        if (String.fromCharCode(charCode_1) !== 'i' && String.fromCharCode(charCode_1) !== '`') {

            find_1 = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_1)}${(num_1).toString()}`)
            const reg = new RegExp(arrayString.join('|')).test(`${String.fromCharCode(charCode_1)}${(num_1).toString()}`)

            if (reg) {
                arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_1).toString()}`)
                break;
            } else {
                if (typeof find_1 === 'object') {
                    arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_1).toString()}`)
                    break;
                } else {
                    arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_1).toString()}`)
                    element1++
                }
            }
        } else {
            break;
        }
    }
    while (typeof find_2 !== 'object') {
        const charCode_1: number = split[0].charCodeAt(0) - element2
        const num_2: number = Number(split[1])
        if (String.fromCharCode(charCode_1) !== 'i' && String.fromCharCode(charCode_1) !== '`') {
            find_2 = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_1)}${(num_2).toString()}`)
            if (new RegExp(arrayString.join('|')).test(`${String.fromCharCode(charCode_1)}${(num_2).toString()}`)) {
                arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_2).toString()}`)
                break;
            } else {
                if (typeof find_2 === 'object') {
                    arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_2).toString()}`)
                    break;
                } else {
                    arrayMove.push(`${String.fromCharCode(charCode_1)}${(num_2).toString()}`)
                    element2++
                }
            }
        } else {
            break;
        }
    }
    while (typeof find_3 !== 'object') {
        const charCode_2: number = split[0].charCodeAt(0)
        const num_1: number = Number(split[1]) + element3
        if (num_1 !== 0 && num_1 !== 9) {
            find_3 = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_2)}${(num_1).toString()}`)
            if (new RegExp(arrayNumber.join('|')).test(`${String.fromCharCode(charCode_2)}${(num_1).toString()}`)) {
                arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_1).toString()}`)
                break;
            } else {
                if (typeof find_3 === 'object') {
                    arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_1).toString()}`)
                    break;
                } else {
                    arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_1).toString()}`)
                    element3++
                }
            }
        }
        else {
            break;
        }
    }

    while (typeof find_4 !== 'object') {
        const charCode_2: number = split[0].charCodeAt(0)
        const num_2: number = Number(split[1]) - element4

        if (num_2 !== 0 && num_2 !== 9) {
            find_4 = PieceTheme.find(element => element.position === `${String.fromCharCode(charCode_2)}${(num_2).toString()}`)
            if (new RegExp(arrayNumber.join('|')).test(`${String.fromCharCode(charCode_2)}${(num_2).toString()}`)) {
                arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_2).toString()}`)
                break;
            } else {
                if (typeof find_4 === 'object') {
                    arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_2).toString()}`)
                    break;
                } else {
                    arrayMove.push(`${String.fromCharCode(charCode_2)}${(num_2).toString()}`)
                    element4++
                }
            }
        } else {
            break;
        }
    }


    if (arrayMove.includes(direction)) {
        await Update(position, direction)
    }

}