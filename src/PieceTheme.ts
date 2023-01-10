import bishop_b from './assets/images/bishop_b.png'
import bishop_w from './assets/images/bishop_w.png'
import king_b from './assets/images/king_b.png'
import king_w from './assets/images/king_w.png'
import knight_b from './assets/images/knight_b.png'
import knight_w from './assets/images/knight_w.png'
import pawn_b from './assets/images/pawn_b.png'
import pawn_w from './assets/images/pawn_w.png'
import queen_b from './assets/images/queen_b.png'
import queen_w from './assets/images/queen_w.png'
import rook_b from './assets/images/rook_b.png'
import rook_w from './assets/images/rook_w.png'

type PiecesProps = {
    position: string;
    image: any;
    name : string;
    color: string;
}

export let PieceTheme : PiecesProps[] = [
    {
        position : "a1",
        image : rook_w,
        name : "rookWhite",
        color : "white"
    },
    {
        position : "b1",
        image : knight_w,
        name : "knightWhite",
        color : "white"
    },
    {
        position : "c1",
        image : bishop_w,
        name : "bishopWhite",
        color : "white"
    },
    {
        position : "d1",
        image : queen_w,
        name : 'queenWhite',
        color : "white"
    },
    {
        position : "e1",
        image : king_w,
        name : 'kingWhite',
        color : "white"
    },
    {
        position : "f1",
        image : bishop_w,
        name : 'bishopWhite',
        color : "white"
    },
    {
        position : "g1",
        image : knight_w,
        name : 'knightWhite',
        color : "white"
    },
    {
        position : "h1",
        image : rook_w,
        name : 'rookWhite',
        color : "white"
    },
    {
        position : "a2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "b2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "c2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "d2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "e2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "f2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "g2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "h2",
        image : pawn_w,
        name : 'pawnWhite',
        color : "white"
    },
    {
        position : "a8",
        image : rook_b,
        name : 'rookBlack',
        color : "black"
    },
    {
        position : "b8",
        image : knight_b,
        name : 'knightBlack',
        color : "black"
    },
    {
        position : "c8",
        image : bishop_b,
        name : 'bishopBlack',
        color : "black"
    },
    {
        position : "d8",
        image : queen_b,
        name : 'queenBlack',
        color : "black"
    },
    {
        position : "e8",
        image : king_b,
        name : 'kingBlack',
        color : "black"
    },
    {
        position : "f8",
        image : bishop_b,
        name : 'bishopBlack',
        color : "black"
    },
    {
        position : "g8",
        image : knight_b,
        name : 'knightBlack',
        color : "black"
    },
    {
        position : "h8",
        image : rook_b,
        name : 'rookBlack',
        color : "black"
    },
    {
        position : "a7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "b7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "c7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "d7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "e7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "f7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "g7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    },
    {
        position : "h7",
        image : pawn_b,
        name : 'pawnBlack',
        color : "black"
    }
]