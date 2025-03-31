import { FC } from 'react';
import { Button } from '@mui/material';
import { TodoRenderType } from '../../Stores/TodoListStore';
import usePageNumber from '../../Hooks/usePageNumber';
import useTodoListStore from '../../Hooks/useTodoListStore';

const ChangeRenderType: FC<{ renderType: TodoRenderType; title: string }> = ({
    renderType,
    title,
}) => {
    type RecordType = Record<string, string>;

    const RENDER_TYPE_MAP: RecordType = {
        ВСЕ: 'ALL',
        АКТИВНЫЕ: 'ACTIVE',
        ВЫПОЛНЕННЫЕ: 'ВЫПОЛНЕННЫЕ',
    };

    const todoListStore = useTodoListStore();
    const [, setPageNumber] = usePageNumber();

    const handleOnClick = (): void => {
        todoListStore.toggleRenderType(renderType);
        setPageNumber(1);
    };

    return (
        <Button
            variant={
                todoListStore.todoRenderType === title
                    ? 'outlined'
                    : 'contained'
            }
            onClick={handleOnClick}
        >
            {title}
        </Button>
    );
};

export default ChangeRenderType;
