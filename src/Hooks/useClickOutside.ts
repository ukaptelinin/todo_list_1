import { RefObject, useEffect, useRef } from 'react';

const useClickOutside = <T extends HTMLFormElement>(
    action: () => void,
    formRef: RefObject<T>,
) => {
    const actionRef = useRef(action);
    actionRef.current = action;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                actionRef.current();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
};

export default useClickOutside;
