import { useState } from 'react';

type UseModalStateReturn = {
    open: boolean,
    openModal: () => void,
    clouseModal: () => void,
};

const useModalState = (setState:boolean): UseModalStateReturn => {
    const [open, setOpen] = useState(setState);

    const openModal = (): void => {
        setOpen(true);
    };
    const clouseModal = (): void => {
        setOpen(false);
    };

    return { open, openModal, clouseModal };
};

export default useModalState;
