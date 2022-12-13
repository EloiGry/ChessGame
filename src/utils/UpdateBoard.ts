import { PieceTheme } from "../PieceTheme";
import { TurnContext } from "../context/Turn";
import { useContext } from "react";

export function Update(element1 : string, element2 : string) {
    const {WhiteToPlay, setWhiteToPlay} = useContext(TurnContext)
    
    const update = PieceTheme.findIndex(element => element.position === element1)
    PieceTheme[update].position = element2 
    setWhiteToPlay(!WhiteToPlay)
}