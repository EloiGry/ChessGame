import Update from "../../utils/UpdateBoard";
import { PawnProperty_B, PawnProperty_W } from "./PawnProperty";


export async function PawnMove_W(position: string, direction: string) {
    const {newPosition, newPositionBis, newPositionTer, newPositionQ} = await PawnProperty_W(position)

    if (newPosition === direction || newPositionBis === direction || newPositionTer === direction || newPositionQ === direction) {
        await Update(position, direction)
    }
};

export async function PawnMove_B(position: string, direction: string) {

    const {newPosition, newPositionBis, newPositionTer, newPositionQ} = await PawnProperty_B(position)

    if (newPosition === direction || newPositionBis === direction || newPositionTer === direction || newPositionQ === direction) {
        await Update(position, direction)
    }
};
