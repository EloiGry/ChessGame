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
    name : string;
}

export let PieceTheme : PiecesProps[] = [
    {
        position : "a1",
        image : rook_w,
        name : "rookWhite"
    },
    {
        position : "b1",
        image : knight_w,
        name : "knightWhite"
    },
    {
        position : "c1",
        image : bishop_w,
        name : "bishopWhite"
    },
    {
        position : "d1",
        image : queen_w,
        name : 'queenWhite'
    },
    {
        position : "e1",
        image : king_w,
        name : 'kingWhite'
    },
    {
        position : "f1",
        image : bishop_w,
        name : 'bishopWhite'
    },
    {
        position : "g1",
        image : knight_w,
        name : 'knightWhite'
    },
    {
        position : "h1",
        image : rook_w,
        name : 'rookWhite'
    },
    {
        position : "a2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "b2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "c2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "d2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "e2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "f2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "g2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "h2",
        image : pawn_w,
        name : 'pawnWhite'
    },
    {
        position : "a8",
        image : rook_b,
        name : 'rookBlack'
    },
    {
        position : "b8",
        image : knight_b,
        name : 'knightBlack'
    },
    {
        position : "c8",
        image : bishop_b,
        name : 'bishopBlack'
    },
    {
        position : "d8",
        image : queen_b,
        name : 'queenBlack'
    },
    {
        position : "e8",
        image : king_b,
        name : 'kingBlack'
    },
    {
        position : "f8",
        image : bishop_b,
        name : 'bishopBlack'
    },
    {
        position : "g8",
        image : knight_b,
        name : 'knightBlack'
    },
    {
        position : "h8",
        image : rook_b,
        name : 'rookBlack'
    },
    {
        position : "a7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "b7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "c7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "d7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "e7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "f7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "g7",
        image : pawn_b,
        name : 'pawnBlack'
    },
    {
        position : "h7",
        image : pawn_b,
        name : 'pawnBlack'
    }
]