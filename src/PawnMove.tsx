import { Update } from "./utils/UpdateBoard";

export async function PawnMove (position : string, direction : string) {
    const split = position.split("")
    const newPosition: string = `${split[0]}${(Number(split[1]) + 1).toString()}`
    console.log("newP", newPosition);
    
    console.log("charaaaat",split[0].charCodeAt(0));
    

    if (newPosition === direction) {
        await Update(position, newPosition) 
    }
};
