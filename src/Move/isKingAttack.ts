import { IsKingAttack_B_Bishop, IsKingAttack_W_Bishop} from "./Bishop/IsKingAttack_Bishop";
import { IsKingAttack_B_Rook, IsKingAttack_W_Rook } from "./Rock/isKingAttack_Rook";
import { isKingAttack_B_Knight, isKingAttack_W_Knight} from "./Knight/IsKingAttack_Knight";
import { IsKingAttack_B_Pawn, IsKingAttack_W_Pawn } from "./Pawn/IsKingAttack_Pawn";



export async function isKing_W_Attack (king: string) {
    await IsKingAttack_B_Bishop(king)
    await IsKingAttack_B_Rook(king)
    await isKingAttack_B_Knight(king)
    await IsKingAttack_B_Pawn(king)
    if (await IsKingAttack_B_Bishop(king) || await IsKingAttack_B_Rook(king) || await isKingAttack_B_Knight(king) || await IsKingAttack_B_Pawn(king)) {
        return true
    }
}

export async function isKing_B_Attack (king: string) {
    await IsKingAttack_W_Bishop(king)
    await IsKingAttack_W_Rook(king)
    await isKingAttack_W_Knight(king)
    await IsKingAttack_W_Pawn(king) 
    if (await IsKingAttack_W_Bishop(king) || await IsKingAttack_W_Rook(king) || await isKingAttack_W_Knight(king) || await IsKingAttack_W_Pawn(king)) {
        return true
    }
}