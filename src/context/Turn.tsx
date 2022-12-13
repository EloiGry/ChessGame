import React, { useState, createContext } from 'react';


interface ContextProps {
    children: React.ReactNode
}


const TurnContext = createContext<any>({});

const TurnContextProvider = ({children}: ContextProps)  => {
    const [WhiteToPlay, setWhiteToPlay] = useState<Boolean>(true)

    
    const value = {
        WhiteToPlay,
        setWhiteToPlay
    }

    console.log("WhiteToPlay?", WhiteToPlay);
    

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