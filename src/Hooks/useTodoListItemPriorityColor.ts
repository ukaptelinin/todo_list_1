import { Theme } from '@mui/material/styles';
import { TodoListPriorityType } from '../Stores/TodoListStore';

type RecordType = Record<TodoListPriorityType, string>;

const useTodoListItemPriorityColor = (
    priority: TodoListPriorityType,
    todoTheme: Theme,
): string => {
    const PRIORITY_COLOR_MAP: RecordType = {
        HIGH: todoTheme.palette.error.light,
        MEDIUM: todoTheme.palette.success.light,
        LOW: todoTheme.palette.info.light,
        NONE: todoTheme.palette.grey[500],
    };

    return PRIORITY_COLOR_MAP[priority];
};

const selectTodoListPriorityColor = (
    priority: TodoListPriorityType,
    todoTheme: Theme,
): string => {
    const color = useTodoListItemPriorityColor(priority, todoTheme);
    return color;
};

export default selectTodoListPriorityColor;
