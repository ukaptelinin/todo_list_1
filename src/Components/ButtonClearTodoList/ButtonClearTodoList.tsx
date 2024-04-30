import { useContext, FC } from 'react';
import { Button } from '@mui/material';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const ButtonClearTodoList: FC = () => {
    const { todoClearCompleted } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        todoClearCompleted();
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={handleOnClick}
            sx={{ ml: 5 }}
        >
            Clear completed
        </Button>
    );
};

export default ButtonClearTodoList;
