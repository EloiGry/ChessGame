import { PieceTheme } from "./PieceTheme";

interface SquareProps {
    positionSquare: string;
    background?: string;
    image?: string;
}

const Square = ({positionSquare, background, image} : SquareProps) => {
     console.log(positionSquare)
     const piece = PieceTheme.find(element => element.position === positionSquare)
     return (
        <div className="border-2 border-black relative" style={{backgroundColor: background}}>
            {piece && <img src={piece.image} className='absolute top-0' /> }
        </div>

     )
};

export default Square;