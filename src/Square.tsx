import { PieceTheme } from "./PieceTheme";
import { useEffect } from "react";
import {useTurn} from "./store/store";



interface SquareProps {
    positionSquare: string;
    background?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square = ({positionSquare, background, onClick} : SquareProps) => {
    const Turn = useTurn(state => state.toggleShow)

    const piece = PieceTheme.find(element => element.position === positionSquare)

    useEffect(() => {
        if (piece) {
            Turn()
        }
    }, [piece])

     return (
        <button className="border-2 border-black relative" style={{backgroundColor: background}} onClick={onClick} >
            {piece && <img src={piece.image} className='absolute top-0' alt={piece.name} /> }
        </button>

     )
};

export default Square;