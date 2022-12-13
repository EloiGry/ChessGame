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

export let PieceTheme : PiecesProps[] = [
    {
        position : "a1",
        image : rook_w
    },
    {
        position : "b1",
        image : knight_w
    },
    {
        position : "c1",
        image : bishop_w
    },
    {
        position : "d1",
        image : queen_w
    },
    {
        position : "e1",
        image : king_w
    },
    {
        position : "f1",
        image : bishop_w
    },
    {
        position : "g1",
        image : knight_w
    },
    {
        position : "h1",
        image : rook_w
    },
    {
        position : "a2",
        image : pawn_w
    },
    {
        position : "b2",
        image : pawn_w
    },
    {
        position : "c2",
        image : pawn_w
    },
    {
        position : "d2",
        image : pawn_w
    },
    {
        position : "e2",
        image : pawn_w
    },
    {
        position : "f2",
        image : pawn_w
    },
    {
        position : "g2",
        image : pawn_w
    },
    {
        position : "h2",
        image : pawn_w
    },
    {
        position : "a8",
        image : rook_b
    },
    {
        position : "b8",
        image : knight_b
    },
    {
        position : "c8",
        image : bishop_b
    },
    {
        position : "d8",
        image : queen_b
    },
    {
        position : "e8",
        image : king_b
    },
    {
        position : "f8",
        image : bishop_b
    },
    {
        position : "g8",
        image : knight_b
    },
    {
        position : "h8",
        image : rook_b
    },
    {
        position : "a7",
        image : pawn_b
    },
    {
        position : "b7",
        image : pawn_b
    },
    {
        position : "c7",
        image : pawn_b
    },
    {
        position : "d7",
        image : pawn_b
    },
    {
        position : "e7",
        image : pawn_b
    },
    {
        position : "f7",
        image : pawn_b
    },
    {
        position : "g7",
        image : pawn_b
    },
    {
        position : "h7",
        image : pawn_b
    }
]