import { useContext, FC } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoDeleteButton: FC<{ id:number }> = ({ id }) => {
    const { deleteTodo } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        deleteTodo(id);
    };

    return (

        <IconButton
            onClick={handleOnClick}
        >
            <Delete />
        </IconButton>
    );
};

export default TodoDeleteButton;
