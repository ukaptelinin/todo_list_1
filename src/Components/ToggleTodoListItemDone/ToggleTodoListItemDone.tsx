import { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import useTodoListStore from '../../Hooks/useTodoListStore';

const ToggleTodoListItemDone: FC<{ id: number; isDone: boolean }> = ({
    id,
    isDone,
}) => {
    const todoListStore = useTodoListStore();

    const handleToggleDone = (
        event: React.MouseEvent<HTMLDivElement>,
    ): void => {
        event.stopPropagation();
        todoListStore.toggleDone(id);
    };

    return (
        <div onClick={handleToggleDone}>
            <Checkbox checked={isDone} sx={{ pl: 0 }} />
        </div>
    );
};

export default ToggleTodoListItemDone;
