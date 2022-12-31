import React, { useState, createContext, useMemo } from 'react';


interface ContextProps {
    children: React.ReactNode
}


const IsWhiteKingAttackContext = createContext<any>({});

const IsWhiteKingAttackContextProvider = ({children}: ContextProps)  => {
    const [whiteKingAttack, setWhiteKingAttack] = useState<boolean>(false)


    console.log("whiteKingAttack",whiteKingAttack);
    

    const value = useMemo(() => ({
        whiteKingAttack,
        setWhiteKingAttack,
    }), [whiteKingAttack]);
    

    return (
        <IsWhiteKingAttackContext.Provider value={value}>
            {children}
        </IsWhiteKingAttackContext.Provider>
    )

}

export {
    IsWhiteKingAttackContext,
    IsWhiteKingAttackContextProvider
}