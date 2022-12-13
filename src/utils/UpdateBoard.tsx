import { PieceTheme } from "../PieceTheme";
// import { useContext } from "react";
// import { TurnContext } from "../context/Turn";

const Update = async (element1 : string, element2 : string) => {
    // const {whiteToPlay, setWhiteToPlay} = useContext(TurnContext)
    
    const update = PieceTheme.findIndex(element => element.position === element1)
    PieceTheme[update].position = element2
    

    // setWhiteToPlay(!whiteToPlay)
}

export default Update;
