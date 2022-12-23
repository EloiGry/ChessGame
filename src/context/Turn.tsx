import React, { useState, createContext, useMemo } from 'react';


interface ContextProps {
    children: React.ReactNode
}


const TurnContext = createContext<any>({});

const TurnContextProvider = ({children}: ContextProps)  => {
    const [whiteToPlay, setWhiteToPlay] = useState<boolean | undefined>(false)

    const getTurn = () => {
        setWhiteToPlay(!whiteToPlay)
    }

    console.log("whiteToPlay?",whiteToPlay);
    

    const value = useMemo(() => ({
        whiteToPlay,
        setWhiteToPlay,
        getTurn 
    }), [whiteToPlay]);
    

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