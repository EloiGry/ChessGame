import { IsKingAttack_B_Bishop, IsKingAttack_W_Bishop} from "./Bishop/IsKingAttack_Bishop";
import { IsKingAttack_B_Rook, IsKingAttack_W_Rook } from "./Rock/isKingAttack_Rook";
import { isKingAttack_B_Knight, isKingAttack_W_Knight} from "./Knight/IsKingAttack_Knight";
import { IsKingAttack_B_Pawn, IsKingAttack_W_Pawn } from "./Pawn/IsKingAttack_Pawn";

export async function isKingAttack (king: string) {
    IsKingAttack_B_Bishop(king)
    IsKingAttack_W_Bishop(king)
    IsKingAttack_B_Rook(king)
    IsKingAttack_W_Rook(king)
    isKingAttack_B_Knight(king)
    isKingAttack_W_Knight(king)
    IsKingAttack_W_Pawn(king) 
    IsKingAttack_B_Pawn(king)
}