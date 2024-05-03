import { useContext, FC } from 'react';
import { Button } from '@mui/material';
import { TodosStateContext, TodoRenderType } from '../TodosStateContextProvider/context';
import usePageNumber from '../../Hooks/usePageNumber';

const ChangeRenderType: FC<{ renderType: TodoRenderType, title: string }> = ({ renderType, title }) => {
    const [,setPageNumber] = usePageNumber();
    const { toggleRenderType, todoRenderType } = useContext(TodosStateContext);

    const handleOnClick = (): void => {
        toggleRenderType(renderType);
        setPageNumber(1);
    };

    return (
        <Button
            variant={todoRenderType === title ? 'outlined' : 'contained'}
            onClick={handleOnClick}
        >
            {title}
        </Button>
    );
};

export default ChangeRenderType;
