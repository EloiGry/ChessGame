export async function PawnProperty_W (position : string) {
    const split: string[] = position.split("")
    const getPawnRight: number = split[0].charCodeAt(0) + 1
    const getPawnLeft: number = split[0].charCodeAt(0) - 1;
    const newPosition: string = `${split[0]}${(Number(split[1]) + 1).toString()}`
    const newPositionBis: string | null = Number(split[1]) === 2 ? (`${split[0]}${(Number(split[1]) + 2).toString()}`) : (null)
    const newPositionTer: string = `${String.fromCharCode(getPawnRight)}${(Number(split[1]) + 1).toString()}`
    const newPositionQ: string = `${String.fromCharCode(getPawnLeft)}${(Number(split[1]) + 1).toString()}`
    return {newPosition, newPositionBis, newPositionTer, newPositionQ}
}

export async function PawnProperty_B (position : string) {
    const split = position.split("")
    const getPawnRight: number = split[0].charCodeAt(0) + 1
    const getPawnLeft: number = split[0].charCodeAt(0) - 1;
    const newPosition: string = `${split[0]}${(Number(split[1]) - 1).toString()}`
    const newPositionBis: string | null = Number(split[1]) === 7 ? (`${split[0]}${(Number(split[1]) - 2).toString()}`) : (null)
    const newPositionTer: string = `${String.fromCharCode(getPawnRight)}${(Number(split[1]) - 1).toString()}`
    const newPositionQ: string = `${String.fromCharCode(getPawnLeft)}${(Number(split[1]) - 1).toString()}`
    return {newPosition, newPositionBis, newPositionTer, newPositionQ}
}