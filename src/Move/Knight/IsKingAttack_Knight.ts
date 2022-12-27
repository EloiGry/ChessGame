import { PieceTheme } from "../../PieceTheme";
import { KnightProperty } from "./KnightProperty";

interface Object {
    position: string,
    image: any,
    name: string,
    color: string
}

export async function isKingAttack_Knight(newPosition: string, king: string) {
    const { newPosition_1, newPosition_2, newPosition_3, newPosition_4, newPosition_5, newPosition_6, newPosition_7, newPosition_8 } = await KnightProperty(newPosition);

    const find: Object | undefined = PieceTheme.find(element => element.name === king)
    if (find) {
        if (newPosition_1 === find.position || newPosition_2 === find.position || newPosition_3 === find.position || newPosition_4 === find.position || newPosition_5 === find.position || newPosition_6 === find.position || newPosition_7 === find.position || newPosition_8 === find.position) {
            console.log('king has to move')
        }
    }
}

