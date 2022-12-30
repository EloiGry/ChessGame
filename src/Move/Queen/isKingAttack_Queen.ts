import { IsKingAttack_B_Bishop, IsKingAttack_W_Bishop } from "../Bishop/IsKingAttack_Bishop";
import { IsKingAttack_B_Rook, IsKingAttack_W_Rook } from "../Rock/isKingAttack_Rook";

export async function isKingAttack_Queen (king: string) {
    await IsKingAttack_B_Bishop(king)
    await IsKingAttack_W_Bishop(king)
    await IsKingAttack_B_Rook(king)
    await IsKingAttack_W_Rook(king)
}