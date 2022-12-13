import Update from "./utils/UpdateBoard";

export async function PawnMove (position : string, direction : string) {
    const split = position.split("")
    const newPosition: string = `${split[0]}${(Number(split[1]) + 1).toString()}`

    if (newPosition === direction) {
        await Update(position, newPosition) 
    }
};
