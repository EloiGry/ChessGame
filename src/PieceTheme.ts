import bishop_b from './assets/bishop_b.png'
import bishop_w from './assets/bishop_w.png'
import king_b from './assets/king_b.png'
import king_w from './assets/king_w.png'
import knight_b from './assets/knight_b.png'
import knight_w from './assets/knight_w.png'
import pawn_b from './assets/pawn_b.png'
import pawn_w from './assets/pawn_w.png'
import queen_b from './assets/queen_b.png'
import queen_w from './assets/queen_w.png'
import rook_b from './assets/rook_b.png'
import rook_w from './assets/rook_w.png'

type PiecesProps = {
    position: string;
    image: any;
}

export const PieceTheme : PiecesProps[] = [
    {
        position : "a1",
        image : rook_w
    },
    {
        position : "a2",
        image : knight_w
    },
    {
        position : "a3",
        image : bishop_w
    },
    {
        position : "a4",
        image : queen_w
    },
    {
        position : "a5",
        image : king_w
    },
    {
        position : "a6",
        image : bishop_w
    },
    {
        position : "a7",
        image : knight_w
    },
    {
        position : "a8",
        image : rook_w
    },
    {
        position : "b1",
        image : pawn_w
    },
    {
        position : "b2",
        image : pawn_w
    },
    {
        position : "b3",
        image : pawn_w
    },
    {
        position : "b4",
        image : pawn_w
    },
    {
        position : "b5",
        image : pawn_w
    },
    {
        position : "b6",
        image : pawn_w
    },
    {
        position : "b7",
        image : pawn_w
    },
    {
        position : "b8",
        image : pawn_w
    },
    {
        position : "h1",
        image : rook_b
    },
    {
        position : "h2",
        image : knight_b
    },
    {
        position : "h3",
        image : bishop_b
    },
    {
        position : "h4",
        image : queen_b
    },
    {
        position : "h5",
        image : king_b
    },
    {
        position : "h6",
        image : bishop_b
    },
    {
        position : "h7",
        image : knight_b
    },
    {
        position : "h8",
        image : rook_b
    },
    {
        position : "g1",
        image : pawn_b
    },
    {
        position : "g2",
        image : pawn_b
    },
    {
        position : "g3",
        image : pawn_b
    },
    {
        position : "g4",
        image : pawn_b
    },
    {
        position : "g5",
        image : pawn_b
    },
    {
        position : "g6",
        image : pawn_b
    },
    {
        position : "g7",
        image : pawn_b
    },
    {
        position : "g8",
        image : pawn_b
    }
]