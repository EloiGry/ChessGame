import { IsKingAttack_Bishop } from "../Bishop/IsKingAttack_Bishop";
import { IsKingAttack_Rook } from "../Rock/isKingAttack_Rook";

export async function isKingAttack_Queen (newPosition : string, king: string) {
    await IsKingAttack_Bishop(newPosition, king)
    await IsKingAttack_Rook(newPosition, king)
}