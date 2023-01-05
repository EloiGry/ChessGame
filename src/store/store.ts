import create from 'zustand'

type MyStore = {
    show: boolean;
    toggleShow: () => void;
};

const useTurn = create<MyStore>((set) => ({
    show: true,
    toggleShow: () => set((state) => ({ show: !state.show})),
}))

const useBlackKingAttack = create<MyStore>((set) => ({
    show: true,
    toggleShow: () => set((state) => ({ show: !state.show})),
}))

const useWhiteKingAttack = create<MyStore>((set) => ({
    show: true,
    toggleShow: () => set((state) => ({ show: !state.show})),
}))

export {useTurn, useBlackKingAttack, useWhiteKingAttack}