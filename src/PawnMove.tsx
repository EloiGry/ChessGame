
export async function PawnMove (position : string) {
    const split = position.split("")
    const newPosition: string = `${split[0]}${(Number(split[1]) + 1).toString()}`
    console.log("newP" ,newPosition);
    
    // if (direction === newPosition) {
    //     position = newPosition
    // }

};
