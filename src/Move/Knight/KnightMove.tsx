import Update from "../../utils/UpdateBoard"
import { KnightProperty } from "./KnightProperty"

export async function KnightMove(position: string, direction: string) {
    const { newPosition_1, newPosition_2, newPosition_3, newPosition_4, newPosition_5, newPosition_6, newPosition_7, newPosition_8 } = await KnightProperty(position);

    if (newPosition_1 === direction || newPosition_2 === direction || newPosition_3 === direction || newPosition_4 === direction || newPosition_5 === direction || newPosition_6 === direction || newPosition_7 === direction || newPosition_8 === direction) {
        await Update(position, direction)
    }
}