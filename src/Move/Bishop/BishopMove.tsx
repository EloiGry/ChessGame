import Update from "../../utils/UpdateBoard"
import { BishopProperty } from "./BishopProperty"

export async function BishopMove(position: string, direction: string) {
    const arrayMove = await BishopProperty(position)

    if (arrayMove.includes(direction)) {
        await Update(position, direction)
    }

}