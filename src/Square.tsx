import { PieceTheme } from "./PieceTheme";

interface SquareProps {
    positionSquare: string;
    background?: string;
    image?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Square = ({positionSquare, background, image, onClick} : SquareProps) => {

     const piece = PieceTheme.find(element => element.position === positionSquare)
     return (
        <button className="border-2 border-black relative" style={{backgroundColor: background}} onClick={onClick}>
            {piece && <img src={piece.image} className='absolute top-0' /> }
        </button>

     )
};

export default Square;