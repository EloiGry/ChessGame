import React, { useState, createContext, useMemo } from 'react';


interface ContextProps {
    children: React.ReactNode
}


const IsBlackKingAttackContext = createContext<any>({});

const IsBlackKingAttackContextProvider = ({children}: ContextProps)  => {
    const [blackKingAttack, setBlackKingAttack] = useState<boolean>(false)


    console.log("blackKingAttack",blackKingAttack);
    

    const value = useMemo(() => ({
        blackKingAttack,
        setBlackKingAttack,
    }), [blackKingAttack]);
    

    return (
        <IsBlackKingAttackContext.Provider value={value}>
            {children}
        </IsBlackKingAttackContext.Provider>
    )

}

export {
    IsBlackKingAttackContext,
    IsBlackKingAttackContextProvider
}