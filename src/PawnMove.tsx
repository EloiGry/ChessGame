import Update from "./utils/UpdateBoard";

export async function PawnMove (position : string, direction : string) {
    const split = position.split("")
    const newPosition: string = `${split[0]}${(Number(split[1]) + 1).toString()}` 
    const newPositionBis : string | null = Number(split[1]) === 2 ? (`${split[0]}${(Number(split[1]) + 2).toString()}`) : (null)



    if (newPosition === direction || newPositionBis === direction) {
        await Update(position, direction) 
    }
};
