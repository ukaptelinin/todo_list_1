import { RefObject, useEffect } from 'react';

const useClickOutside = <T extends HTMLElement>(
    action: () => void,
    divRef: RefObject<T>,
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                divRef.current &&
                !divRef.current.contains(event.target as Node)
            ) {
                action();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [action, divRef]);
};

export default useClickOutside;
