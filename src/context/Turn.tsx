import React, { useState, createContext } from 'react';


interface ContextProps {
    children: React.ReactNode
}


const TurnContext = createContext<any>({});

const TurnContextProvider = ({children}: ContextProps)  => {
    const [whiteToPlay, setWhiteToPlay] = useState<boolean>(true)

    const value = {
        whiteToPlay,
        setWhiteToPlay
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