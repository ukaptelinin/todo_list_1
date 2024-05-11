import { FC } from 'react';
import { Button } from '@mui/material';
import todoListStore, { TodoRenderType } from '../../Stores/store';
import usePageNumber from '../../Hooks/usePageNumber';

const ChangeRenderType: FC<{ renderType: TodoRenderType, title: string }> = ({ renderType, title }) => {
    const [,setPageNumber] = usePageNumber();

    const handleOnClick = (): void => {
        todoListStore.toggleRenderType(renderType);
        setPageNumber(1);
    };

    return (
        <Button
            variant={todoListStore.todoRenderType === title ? 'outlined' : 'contained'}
            onClick={handleOnClick}
        >
            {title}
        </Button>
    );
};

export default ChangeRenderType;
