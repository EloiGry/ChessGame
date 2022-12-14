import React, { useState, createContext } from 'react';


interface ContextProps {
    children: React.ReactNode
}


const TurnContext = createContext<any>({});

const TurnContextProvider = ({children}: ContextProps)  => {
    const [whiteToPlay, setWhiteToPlay] = useState<boolean>(false)

    const getTurn = () => {
        setWhiteToPlay(!whiteToPlay)
    }

    console.log("whiteToPlay?",whiteToPlay);
    

    const value = {
        whiteToPlay,
        setWhiteToPlay,
        getTurn
    }
    

    return (
        <TurnContext.Provider value={value}>
            {children}
        </TurnContext.Provider>
    )

}

export {
    TurnContext,
    TurnContextProvider
}