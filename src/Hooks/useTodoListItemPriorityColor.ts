import { useContext } from 'react';
import { TodoListPriorityType } from '../Stores/TodoListStore';
import { ThemeContext } from '../TodosThemeContextProvider/context';

type RecordType = Record<TodoListPriorityType, string>;

const useTodoListItemPriorityColor = (
    priority: TodoListPriorityType,
): string => {
    const { todoTheme } = useContext(ThemeContext);
    const PRIORITY_COLOR_TABLE: RecordType = {
        HIGH: todoTheme.palette.error.light,
        MEDIUM: todoTheme.palette.success.light,
        LOW: todoTheme.palette.info.light,
        NONE: todoTheme.palette.grey[500],
    };

    return PRIORITY_COLOR_TABLE[priority];
};

export default useTodoListItemPriorityColor;
