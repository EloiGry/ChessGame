import { PieceTheme } from "./PieceTheme";
import { useContext, useEffect } from "react";
import { TurnContext } from "./context/Turn";

interface SquareProps {
    positionSquare: string;
    background?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square = ({positionSquare, background, onClick} : SquareProps) => {
    const {getTurn} = useContext(TurnContext)
    const piece = PieceTheme.find(element => element.position === positionSquare)

    useEffect(() => {
      getTurn()
    }, [piece])

     return (
        <button className="border-2 border-black relative" style={{backgroundColor: background}} onClick={onClick} >
            {piece && <img src={piece.image} className='absolute top-0' alt={piece.name} /> }
        </button>

     )
};

export default Square;