import Update from "../../utils/UpdateBoard"
import { RookProperty } from "./RookProperty"

export async function RookMove(position: string, direction: string) {
    const arrayMove = await RookProperty(position)

    if (arrayMove.includes(direction)) {
        await Update(position, direction)
    }
}